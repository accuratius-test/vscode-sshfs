import * as vscode from 'vscode';
import { FileSystemConfig } from './manager';

const outputChannel = vscode.window.createOutputChannel('ssh-fs');

export function debug(message: string) {
  outputChannel.appendLine(`[DEBUG] ${message}`);
}
export function info(message: string) {
  outputChannel.appendLine(`[INFO] ${message}`);
}
export function warning(message: string) {
  outputChannel.appendLine(`[WARNING] ${message}`);
}
export function error(message: string) {
  outputChannel.appendLine(`[ERROR] ${message}`);
}

export function censorConfig(config: FileSystemConfig): FileSystemConfig {
  return {
    ...config,
    password: config.password ? '<censored>' : config.password,
    passphrase: config.passphrase ? '<censored>' : config.passphrase,
  };
}

info('Created output channel for vscode-sshfs');
