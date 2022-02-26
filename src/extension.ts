// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const childProcess = require("child_process");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "TortoiseGit Buttons" is now active!');

	const allCommands = [
		'pull', 'fetch', 'commit', 'push', 'stashsave', 'stashapply', 'stashpop', 'rename', 'revert',  'log', 'blame', 'diff', 'refbrowse','repobrowser', 'resolve', 'conflicteditor', 'cleanup', 'rebase', 'merge', 'switch'
	];
	for (const value of allCommands) {
		let disposable = vscode.commands.registerCommand("puvox.tgit."+value, (uri) => {
			let path = getPath(uri);
			console.log("TortoiseGit: " + value + " -> " + path);
			execTgCommand(value, path);
            //vscode.window.showInformationMessage('')
		});
		context.subscriptions.push(disposable);
	}
}


function execTgCommand(cmd : string, path : string) {
    childProcess.exec(`TortoiseGitProc.exe /command:${cmd} /path:"${path}"`, (error : any, stdout : any, stderr : any) => {
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
}

function getPath(uri : any) {
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

// this method is called when your extension is deactivated
export function deactivate() {}
