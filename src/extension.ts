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
        codeAction.edit = new vscode.WorkspaceEdit();
        codeAction.command = {
            command: 'sayhello',
            title: 'Say hello!'
        }

        return [ codeAction ];
    }
}