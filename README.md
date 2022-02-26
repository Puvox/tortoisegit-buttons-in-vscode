# TortoiseGit Command Buttons

This [VISUAL STUDIO CODE extension](https://marketplace.visualstudio.com/items?itemName=Puvox.tortoisegit-buttons-in-vscode) adds different [TortoiseGit](https://tortoisegit.org/) command buttons in right-click of sidebar File-Explorer.

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

*Note: this extension is purely lightweight and doesn't use any extra binary files or dependencies to execute commands, instead this extension is just wrapper, which directly pass the commands to TortoiseGit.*
## Release Notes

### 1.0.0

Initial release.

## Build

To build, run `npm i` and then `vsce package` (you need to have vsce installed by `npm install -g vsce`) and it produces .vsix package.
