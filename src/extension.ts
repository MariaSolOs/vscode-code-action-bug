import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) => {
    vscode.languages.registerCodeActionsProvider('typescript', new HelloCodeAction());

    context.subscriptions.push(
        vscode.commands.registerCommand('sayhello', () => {
            vscode.window.showInformationMessage('Hello, world!');
        })
    );
}

class HelloCodeAction implements vscode.CodeActionProvider {
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.ProviderResult<(vscode.CodeAction | vscode.Command)[]> {
        const codeAction = new vscode.CodeAction('Hello, world!');
        // Removing the edit below "fixes" the issue of the command not being triggered in VS Code Insiders,
        // but this isn't the best workaround since the docs (https://code.visualstudio.com/api/references/vscode-api#CodeAction)
        // say that "a CodeAction must set either edit and/or a command. If both are supplied, the edit
        // is applied first, then the command is executed", but I guess that isn't happening anymore (?).
        codeAction.edit = new vscode.WorkspaceEdit();
        codeAction.command = {
            command: 'sayhello',
            title: 'Say hello!'
        }

        return [ codeAction ];
    }
}