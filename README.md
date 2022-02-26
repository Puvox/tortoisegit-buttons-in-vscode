# TortoiseGit Command Buttons

This [VISUAL STUDIO CODE extension](https://marketplace.visualstudio.com/items?itemName=Puvox.tortoisegit-buttons-in-vscode) adds buttons in right-click menu of sidebar File-Explorer, to execute TortoiseGit commands. *(This is an absolutely ligthweight extension without including dependencies or binary files, instead a small plain `.js` file, which is just a wrapper to pass commands to TotroiseGit)*

![Screenshot](https://raw.githubusercontent.com/Puvox/tortoisegit-buttons-in-vscode/main/screenshot.png)

Most of [tortoise-git commands](https://tortoisegit.org/docs/tortoisegit/tgit-automation.html) are supported by this extension.


## Build

Run `npm i` and then `vsce package` (you need to have vsce installed by `npm install -g vsce`) and it produces .vsix package.

## Release Notes

### 0.0.1

Initial release.