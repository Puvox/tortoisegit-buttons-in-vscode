# TortoiseGit Command Buttons

TortoiseGit (https://tortoisegit.org/) is a windows GUI client for git. This [VISUAL STUDIO CODE extension](https://marketplace.visualstudio.com/items?itemName=Puvox.tortoisegit-buttons-in-vscode) adds different TortoiseGit command buttons in sidebar File-Explorer, when you right-click on any file/folder.

![Screenshot](https://raw.githubusercontent.com/Puvox/tortoisegit-buttons-in-vscode/main/screenshot.png)

To avoid extra overload of menu, not [all tortoise-git commands](https://tortoisegit.org/docs/tortoisegit/tgit-automation.html) are added, but only the below ones :
- Pull
- Fetch
- Commit
- Push
- Stash
- Stash Apply
- Stash Pop
- Rename
- Revert
- Log
- Blame
- Diff
- Browse Ref
- Browse Repo
- Resolve
- Conflict editor
- Cleanup
- Rebase
- Merge
- Switch (Checkout/Create) Branch

## Release Notes

### 1.0.0

Initial release.

## Build

To build, run `npm i` and then `vsce package` (you need to have vsce installed by `npm install -g vsce`) and it produces .vsix package.
