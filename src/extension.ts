// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const childProcess = require("child_process");


// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    registerSettings();
	const allCommands = [
		'sync', 'pull', 'fetch', 'commit', 'push', 'stashsave', 'stashapply', 'stashpop', 'rename', 'revert',  'log', 'blame', 'diff', 'repostatus', 'showcompare', 'refbrowse', 'reflog', 'repobrowser', 'revisiongraph', 'resolve', 'conflicteditor', 'cleanup', 'rebase', 'merge', 'switch', 'add', 'remove', 'ignore', 'bisect', 'tag', 'settings', 'subadd', 'subupdate', 'subsync', 'export', 'lfslocks', 'daemon'
	];
	for (const value of allCommands) {
		let disposable = vscode.commands.registerCommand("puvox.tgit." + value, (uri) => {
			let path = getPathOfChosenFile(uri);
			console.log("TortoiseGit: " + value + " -> " + path);
			execTgCommand(value, path);
            //vscode.window.showInformationMessage('')
		});
		context.subscriptions.push(disposable);
	}
}


async function execTgCommand(cmd : string, path : string) {
    const location = vscode.workspace.getConfiguration('TortoisegitButtons').get('TortoiseLocation') as string;
    const pathToExe = location + '/bin/TortoiseGitProc.exe';
    try {
        await vscode.workspace.fs.stat(vscode.Uri.file(pathToExe));
        childProcess.exec(`"${pathToExe}" /command:${cmd} /path:"${path}"`, (error : any, stdout : any, stderr : any) => {
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
        const selection = await vscode.window.showWarningMessage('Can not find TortoiseGit installation. If you have installed it, enter the path here', 'Open settings');
		if (selection !== undefined) {
            openSettings();
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
}

function openSettings() {
    vscode.commands.executeCommand('workbench.action.openSettings', 'TortoisegitButtons.TortoiseLocation');
}

// this method is called when your extension is deactivated
export function deactivate() {}
