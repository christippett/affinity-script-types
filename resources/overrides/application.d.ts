import { Document } from '/document';

export class AppDocuments {
  readonly all: Document[];
  readonly current: Document;
  load(path: string): Document;
}

export class ApplicationSettings {
  loadPSDWithEditableText: boolean;
  readonly undoLimit: number;
}

export class Application {
  readonly documents: AppDocuments;
  alert(message?: string, title?: string): void;
  confirm(message?: string, title?: string): boolean;
  prompt(message?: string, title?: string, initialText?: string): string;
  chooseFile(): string;
  alertAsync(message?: string, title?: string, callback?: () => void): void;
  confirmAsync(message?: string, title?: string, callback?: (result: boolean) => void): void;
  promptAsync(message?: string, title?: string, initialText?: string, callback?: (result: string | null) => void): void;
  chooseFileAsync(callback?: (path: string | null) => void): void;
  readonly compileDate: string;
  readonly platformName: string;
  readonly shortVersion: string;
  readonly version: string;
  readonly buildVersion: number;
  readonly majorVersion: number;
  readonly minorVersion: number;
  readonly revisionVersion: number;
  readonly documentVersion: number;
  readonly buildKind: BuildKind;
  readonly productCopyrightMessage: string;
  readonly productFullName: string;
  readonly productLongName: string;
  readonly productPrimaryFileExtension: string;
  readonly productVersionName: string;
  readonly productShortName: string;
  readonly suiteFullName: string;
  readonly uiParadigm: UiParadigm;
  readonly argC: number;
  readonly argV: string[];
  readonly args: string[];
  readonly settings: ApplicationSettings;
  readonly getUserDesktopPath: string;
  readonly userDesktopPath: string;
}
