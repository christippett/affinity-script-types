import { HandleObject } from '/handleobject';

export class ColourProfile extends HandleObject {
  readonly isColourProfile: boolean;
  readonly name: string;
  readonly isStandard: boolean;
  readonly isLinear: boolean;
  readonly version: number;
  readonly versionStr: string;
  readonly deviceClass: number;
  readonly deviceClassStr: string;
  readonly approximateGamma: number;
}
