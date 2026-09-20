import {
  ResponseHeadersType,
} from "@repo/contracts/types/crawl/urlCrawl/network/responseHeadersTypes";
import { IncomingMessage } from "node:http";

export function parseResponseHeader(res: IncomingMessage): ResponseHeadersType {
  const hsts: string | null = null;
  let csp: string[] = [];
  let xFrameOptions: string[] | null = null;
  let referrerPolicy: string[] | null = null;
  let permissionsPolicy: string[] | null = null;
  let xRobotsTag: string[] = [];
  const cacheControl: string | null = null;
  let etag: string | null = null;
  let lastModified: string | null = null;
  let vary: string | null = null;
  let crossOriginOpenerPolicy: string[] | null = null;
  let crossOriginEmbedderPolicy: string[] | null = null;
  let crossOriginResourcePolicy: string[] | null = null;
  let server: string[] | null = null;



  csp = Array.isArray(res.headers["content-security-policy"])
    ? res.headers["content-security-policy"]
    : res.headers["content-security-policy"]
      ? [res.headers["content-security-policy"]]
      : [];

  const frame = res.headers["x-frame-options"];
  if (typeof frame === "string") {
    xFrameOptions = [frame.toUpperCase()];
  } else {
    xFrameOptions = null;
  }

  const xContentType = res.headers["content-type"];
  const referrerPolicyHeader = res.headers["referrer-policy"] ?? null;
  referrerPolicy = typeof referrerPolicyHeader === "string" ? [referrerPolicyHeader] : null;

  const permissionsPolicyHeader = res.headers["permissions-policy"] ?? null;
  permissionsPolicy = typeof permissionsPolicyHeader === "string" ? [permissionsPolicyHeader] : null;

  const xRobotsTagHeader = res.headers["x-robots-tag"];

  xRobotsTag = Array.isArray(xRobotsTagHeader)
    ? xRobotsTagHeader
    : xRobotsTagHeader
      ? [xRobotsTagHeader]
      : [];



  etag = res.headers["etag"] ?? null;

  lastModified = res.headers["last-modified"] ?? null;

  vary = res.headers["vary"] ?? null;

  const crossOriginOpenerPolicyHeader = res.headers["cross-origin-opener-policy"];
  crossOriginOpenerPolicy = Array.isArray(crossOriginOpenerPolicyHeader)
    ? crossOriginOpenerPolicyHeader
    : typeof crossOriginOpenerPolicyHeader === "string"
      ? [crossOriginOpenerPolicyHeader]
      : null;

  const crossOriginEmbedderPolicyHeader = res.headers["cross-origin-embedder-policy"];
  crossOriginEmbedderPolicy = typeof crossOriginEmbedderPolicyHeader === "string"
    ? [crossOriginEmbedderPolicyHeader]
    : null;

  const crossOriginResourcePolicyHeader = res.headers["cross-origin-resource-policy"];
  crossOriginResourcePolicy = Array.isArray(crossOriginResourcePolicyHeader)
    ? crossOriginResourcePolicyHeader
    : typeof crossOriginResourcePolicyHeader === "string"
      ? [crossOriginResourcePolicyHeader]
      : null;

  const serverHeader = res.headers["server"];
  server = typeof serverHeader === "string" ? [serverHeader] : null;

  return {
    hsts,
    csp,
    xFrameOptions,
    xContentType: xContentType ? [xContentType] : null,
    referrerPolicy,
    permissionsPolicy,
    xRobotsTag,
    cacheControl,
    etag,
    lastModified,
    vary,
    crossOriginOpenerPolicy,
    crossOriginEmbedderPolicy,
    crossOriginResourcePolicy,
    server,
  };
}
