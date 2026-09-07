import { HandleObject } from '/handleobject';

export class UnitValueConverter extends HandleObject {
  readonly dpi: number;
  readonly viewDpi: number;
  clone(): UnitValueConverter;
}
