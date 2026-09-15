
export type ResponseHeadersType = {
  // this browser tell to use https 
  hsts: string | null;
  // CSP primarily protects against attacks such as XSS
  csp: string[] | null;
  xFrameOptions: string[] | null;
  xContentType: string[] | null;
  referrerPolicy: string[] | null;
  permissionsPolicy: string[] | null;
  crossOriginOpenerPolicy: string[] | null;
  crossOriginEmbedderPolicy: string[] | null;
  crossOriginResourcePolicy: string[] | null;
  xRobotsTag: string[];
  cacheControl: string | null;
  etag: string | null;
  lastModified: string | null;
  vary: string | null;
  server: string[] | null;
} 