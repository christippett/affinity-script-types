import { HandleObject } from '/handleobject';

export class Document extends HandleObject {
  readonly dpi: number;
  readonly viewdpi: number;
  readonly widthPixels: number;
  readonly heightPixels: number;
  readonly title: string;
  readonly path: string;
  readonly isOpen: boolean;
  readonly isDirty: boolean;
  readonly isReadOnly: boolean;
  readonly isEmbedded: boolean;
  readonly needsSaving: boolean;
  readonly mustSaveAs: boolean;
  readonly sessionUuid: string;
  readonly persistentUuid: string;
  close(): void;
  save(): void;
  saveAs(path: string): void;
}
