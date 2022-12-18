# Repro for https://github.com/microsoft/vscode/issues/169507

To reproduce the issue, complete the following steps and compare the behavior in VS Code (version 1.74.1, commit 1ad8d514439d5077d2b0b7ee64d2ce82a9308e5a) versus the one in the latest Insiders (version 1.75.0, commit edc432e920c3ec2c2af5e8a99b8e4b782633d298).

1. Clone this repository and run `npm ci`.
1. Debug the extension with the provided `launch` configuration (just pressing F5 _should work_).
1. In the experimental instance, open a TypeScript file and request code actions anywhere in the code.
1. Select the code action titled "Hello, world!".
1. The expected behavior is that a snackbar saying "Hello, world!" will appear in the lower left corner, which is produced by the command registered with the code action (this happens in VS Code, but not in Insiders).
