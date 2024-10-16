// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const childProcess = require("child_process");

const wslLocationPrefixExample = '\\\\\\\\wsl.localhost\\\\Ubuntu';

// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    registerSettings();
	const allCommands = [
		'sync', 'pull', 'fetch', 'commit', 'push', 'stashsave', 'stashapply', 'stashpop', 'rename', 'revert',  'log', 'blame', 'diff', 'repostatus', 'showcompare', 'refbrowse', 'reflog', 'repobrowser', 'revisiongraph', 'resolve', 'conflicteditor', 'cleanup', 'rebase', 'merge', 'switch', 'add', 'remove', 'ignore', 'bisect', 'tag', 'settings', 'subadd', 'subupdate', 'subsync', 'export', 'lfslocks', 'daemon'
	];
	for (const value of allCommands) {
        const callback = (uri: any) => {
			let path = getPathOfChosenFile(uri);
			execTgCommand(value, path);
		};
		let disposable = vscode.commands.registerCommand("puvox.tgit." + value, callback);
		context.subscriptions.push(disposable);
	}
}


async function execTgCommand(cmd : string, path : string) {
    const installationPath = vscode.workspace.getConfiguration('TortoisegitButtons').get('TortoiseLocation') as string;
    let finalPath = path;
    const isWsl = path.startsWith("/");
    const wslLocationPrefix = vscode.workspace.getConfiguration('TortoisegitButtons').get('TortoiseWslPrefixLocation') as string;
    if (isWsl && wslLocationPrefix) {
        finalPath = wslLocationPrefix + finalPath;
    }
    const pathToExe = installationPath + '/bin/TortoiseGitProc.exe';
    const command = `"${pathToExe}" /command:${cmd} /path:"${finalPath}"`;
    console.log("TortoiseGit: ", command);
    // vscode.window.showInformationMessage('')
    try {
        await vscode.workspace.fs.stat(vscode.Uri.file(pathToExe));
    } catch (error) {
        const extraNote = isWsl ? ' (Note, you might be using WSL, read the both settings descriptions)' : '';
        const selection = await vscode.window.showErrorMessage('Can not find TortoiseGit installation.' + extraNote, 'Add TortoiseGit Path');
		if (selection !== undefined) {
            openSettings('TortoiseLocation');
		}
    }
    try {
        childProcess.exec(command, (error : any, stdout : any, stderr : any) => {
            if (error) {
                console.warn(`TortoiseGit [error] -> ${error}`);
            }
            if (stdout) {
                console.log(`TortoiseGit [stdout] -> ${stdout}`);
            }
            if (stderr) {
                console.error(`TortoiseGit [stderr] -> ${stderr}`);
            }
        });
    } catch (error) {
        let extraMsg = (error as any).message;
        if (path.startsWith("/")) {
            extraMsg = "If this path is in WSL, you need to add the 'WSL home path' in settings, like: " + wslLocationPrefixExample;
        }
        const selection = await vscode.window.showWarningMessage('! ' + extraMsg, 'Add WSL location Prefix');
		if (selection !== undefined) {
            openSettings('TortoiseWslPrefixLocation');
		}
    }


        
}

function getPathOfChosenFile(uri : any) {
    if (uri && uri.fsPath) {
        return uri.fsPath;
    }
    else if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document) {
        return vscode.window.activeTextEditor.document.fileName;
    }
    else {
        return vscode.workspace.rootPath;
    }
}

function registerSettings() {
    vscode.workspace.getConfiguration('TortoisegitButtons').update('TortoiseLocation', 'C:\\Program Files\\TortoiseGit', vscode.ConfigurationTarget.Global);
    vscode.workspace.getConfiguration('TortoisegitButtons').update('TortoiseWslPrefixLocation', '', vscode.ConfigurationTarget.Global);
}

function openSettings(which : string = '') {
    vscode.commands.executeCommand('workbench.action.openSettings', 'TortoisegitButtons');
}

// this method is called when your extension is deactivated
export function deactivate() {}
