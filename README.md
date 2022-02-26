# TortoiseGit Command Buttons

This [VISUAL STUDIO CODE extension](https://marketplace.visualstudio.com/items?itemName=Puvox.tortoisegit-buttons-in-vscode) adds buttons in right-click menu of sidebar File-Explorer, to execute TortoiseGit commands. *(This is an absolutely ligthweight extension without including dependencies or binary files, instead a small plain `.js` file, which is just a wrapper to pass commands to TotroiseGit)*

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


## Build

Run `npm i` and then `vsce package` (you need to have vsce installed by `npm install -g vsce`) and it produces .vsix package.

## Release Notes

### 0.0.1

Initial release.