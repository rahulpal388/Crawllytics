import {
  ResponseHeadersType,
  HSTSType,
  CacheControlType,
} from "@repo/config/types/urlInformationType/responseHeadersTypes";
import { IncomingMessage } from "node:http";

export function parseResponseHeader(res: IncomingMessage): ResponseHeadersType {
  let hsts: HSTSType | null = null;
  let csp: string[] = [];
  let xFrameOptions: "DENY" | "SAMEORIGIN" | null = null;
  let xContentTypeOptions = false;
  let referrerPolicy: string | null = null;
  let permissionsPolicy: string | null = null;
  let xRobotsTag: string[] = [];
  let cacheControl: CacheControlType | null = null;
  let etag: string | null = null;
  let lastModified: string | null = null;
  let vary: string | null = null;

  const getHsts = res.headers["strict-transport-security"] ?? null;
  if (getHsts) {
    const hstsParts = getHsts.split(";").map((part) => part.trim());
    const maxAge = hstsParts.find((part) => part.startsWith("max-age="))?.split("=")[1] || "0";
    hsts = {
      value: getHsts,
      maxAge: parseInt(maxAge),
      includeSubdomains: hstsParts.includes("includeSubDomains"),
      preload: hstsParts.includes("preload"),
    };
  }

  csp = Array.isArray(res.headers["content-security-policy"])
    ? res.headers["content-security-policy"]
    : res.headers["content-security-policy"]
      ? [res.headers["content-security-policy"]]
      : [];

  const frame = res.headers["x-frame-options"];
  if (typeof frame === "string") {
    xFrameOptions =
      frame.toUpperCase() === "DENY"
        ? "DENY"
        : frame.toUpperCase() === "SAMEORIGIN"
          ? "SAMEORIGIN"
          : null;
  }
  const contentTypeOptions = res.headers["x-content-type-options"];
  xContentTypeOptions = contentTypeOptions === "nosniff";

  const referrerPolicyHeader = res.headers["referrer-policy"] ?? null;
  referrerPolicy = typeof referrerPolicyHeader === "string" ? referrerPolicyHeader : null;

  const permissionsPolicyHeader = res.headers["permissions-policy"] ?? null;
  permissionsPolicy = typeof permissionsPolicyHeader === "string" ? permissionsPolicyHeader : null;

  const xRobotsTagHeader = res.headers["x-robots-tag"];

  xRobotsTag = Array.isArray(xRobotsTagHeader)
    ? xRobotsTagHeader
    : xRobotsTagHeader
      ? [xRobotsTagHeader]
      : [];

  const cacheControlHeader = res.headers["cache-control"] ?? null;

  if (cacheControlHeader) {
    const cacheControlParts = cacheControlHeader.split(",").map((part) => part.trim());
    cacheControl = {
      maxAge: cacheControlParts.find((part) => part.startsWith("max-age="))
        ? parseInt(
            cacheControlParts.find((part) => part.startsWith("max-age="))?.split("=")[1] || "0",
          )
        : null,
      noCache: cacheControlParts.includes("no-cache"),
      noStore: cacheControlParts.includes("no-store"),
      sMaxAge: cacheControlParts.find((part) => part.startsWith("s-maxage="))
        ? parseInt(
            cacheControlParts.find((part) => part.startsWith("s-maxage="))?.split("=")[1] || "0",
          )
        : null,
      mustRevalidate: cacheControlParts.includes("must-revalidate"),
      isImmutable: cacheControlParts.includes("immutable"),
    };
  }

  etag = res.headers["etag"] ?? null;

  lastModified = res.headers["last-modified"] ?? null;

  vary = res.headers["vary"] ?? null;

  return {
    hsts,
    csp,
    xFrameOptions,
    xContentTypeOptions,
    referrerPolicy,
    permissionsPolicy,
    xRobotsTag,
    cacheControl,
    etag,
    lastModified,
    vary,
  };
}
