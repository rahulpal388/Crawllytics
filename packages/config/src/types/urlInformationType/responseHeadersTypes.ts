export type HSTSType = {
  value: string;
  maxAge: number;
  includeSubdomains: boolean;
  preload: boolean;
};

export type CacheControlType = {
  maxAge: number | null;
  noCache: boolean;
  noStore: boolean;
  sMaxAge: number | null;
  mustRevalidate: boolean;
  isImmutable: boolean;
};

export type ResponseHeadersType = {
  hsts: HSTSType | null;
  csp: string[];
  xFrameOptions: "DENY" | "SAMEORIGIN" | null;
  xContentTypeOptions: boolean;
  referrerPolicy: string | null;
  permissionsPolicy: string | null;
  xRobotsTag: string[];
  cacheControl: CacheControlType | null;
  etag: string | null;
  lastModified: string | null;
  vary: string | null;
};
