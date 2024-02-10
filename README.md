# TortoiseGit Command Buttons

This VSCODE extension adds buttons in right-click menu (in sidebar and in editor) to execute TortoiseGit commands. 

Note: This is an absolutely ligthweight extension and does not include dependencies or binary files. Only a small plain `.js` file, which only passes commands to TotroiseGit.
(*if you ever had manually removed `%Program Files%\TortoiseGit\bin` from your environment PATH, place it back*)

![Screenshot](https://raw.githubusercontent.com/Puvox/tortoisegit-buttons-in-vscode/main/screenshot.png)

Most of [tortoise-git commands](https://tortoisegit.org/docs/tortoisegit/tgit-automation.html) are supported by this extension.


## Build

Run `npm i` and then `vsce package` (you need to have vsce installed by `npm install -g vsce`) and it produces .vsix package.

## Release Notes

### 0.0.1

Initial release.