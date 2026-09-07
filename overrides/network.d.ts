import { HandleObject } from '/handleobject';

export interface HttpRequestResult {
  state: AffinityEnumValue;
  response: HttpResponse;
  reason: string;
}

export class HttpRequest extends HandleObject {
  setTimeoutInSec(timeoutSec: number): this;
  setSuppressUserAgentHeader(suppress: boolean): this;
  setEncodeHeaderValuesAsRfc2047(encodeAs2047: boolean): this;
  setUseExpensiveNetwork(useExpensive: boolean): this;
  setUseConstrainedNetwork(useConstrained: boolean): this;
  setAvoidChunkedTransferEncoding(avoid: boolean): this;
  setHeaderValue(headerKey: string, headerVal: string): void;
  getHeaderValue(headerKey: string): string | null;
  do(): HttpRequestResult;
  doAsync(callback?: (state: AffinityEnumValue, response: HttpResponse, reason: string) => void): void;
  static create(url: string, method: AffinityEnumValue | number): HttpRequest;
}

export class HttpResponse extends HandleObject {
  readonly statusCode: AffinityEnumValue;
  getHeaderValue(headerKey: string): string | null;
  readonly content: unknown;
}
