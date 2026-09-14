export type HSTSType = {
  raw: string;
  maxAge: number;
  includeSubdomains: boolean;
  preload: boolean;
};

export type CSPType = {
  raw: string;
  directives: Record<string, string[]>;
  reportOnly: boolean;
};

export type CacheControlType = {
  raw: string;
  maxAge: number | null;
  sMaxAge: number | null;
  noCache: boolean;
  noStore: boolean;
  mustRevalidate: boolean;
  isImmutable: boolean;
  isPrivate: boolean;
  isPublic: boolean;
  noTransform: boolean;
  staleWhileRevalidate: number | null;
};

export type XFrameOptionsType = {
  raw: string;
  value: "DENY" | "SAMEORIGIN" | "ALLOW-FROM" | "UNKNOWN";
  allowFromUrl: string | null;
};

export type ResponseHeadersType = {
  hsts: HSTSType | null;
  csp: CSPType | null;
  cspReportOnly: CSPType | null;
  xFrameOptions: XFrameOptionsType | null;
  xContentType: { raw: string; isNosniff: boolean } | null;
  referrerPolicy: string | null;
  permissionsPolicy: { raw: string; directives: Record<string, string[]> } | null;
  crossOriginOpenerPolicy: string | null;
  crossOriginEmbedderPolicy: string | null;
  crossOriginResourcePolicy: string | null;
  xRobotsTag: string[];
  cacheControl: CacheControlType | null;
  etag: string | null;
  lastModified: string | null;
  vary: string | null;
  server: string | null;
};