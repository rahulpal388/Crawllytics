import { ResponseHeadersType } from "./responseHeadersTypes.js";

export type CompressionEncodingType = "gzip" | "br" | "zstd" | "deflate" | null;

export type RedirectChainType = {
  sourceUrl: string;
  redirectedTo: string;
  statusCode: number;
};
export const FetchErrorCodes = {
  DNS_FAILURE: "DNS_FAILURE",
  CONNECTION_REFUSED: "CONNECTION_REFUSED",
  TLS_ERROR: "TLS_ERROR",
  TIMEOUT: "TIMEOUT",
  TOO_MANY_REDIRECTS: "TOO_MANY_REDIRECTS",
  UNKNOWN: "UNKNOWN",
} as const;
export type FetchErrorType = {
  code: (typeof FetchErrorCodes)[keyof typeof FetchErrorCodes];
  message: string;
};

export type EachUrlNetworkResultTypes = {
  requestedUrl: string;
  finalUrl: string;
  method: "GET";
  protocol: "http" | "https";
  httpVersion: "HTTP/1.0" | "HTTP/1.1" | "HTTP/2" | "HTTP/3" | null; // null on fetch failure

  statusCode: number | null;
  fetchError: FetchErrorType | null;

  ipAddress: string | null;
  cdnProvider: string[];

  dnsLookupTime: number | null;
  tcpConnectTime: number | null;
  tlsHandshakeTime: number | null | null;
  timeToFirstByte: number | null;
  totalResponseTime: number | null;
  connectionReused: boolean;

  contentType: string | null;
  transferSize: number;
  compressionEncoding: CompressionEncodingType;
  isCompressed: boolean;

  redirectChain: RedirectChainType[];
  isRedirectLoop: boolean;

  responseHeaders: ResponseHeadersType | null;
};
