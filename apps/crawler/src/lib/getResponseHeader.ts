import http from "node:http";
import { ResponseHeadersType } from "@repo/contracts/types/crawl/urlCrawl/network/responseHeadersTypes";

export function getResponseHeader(header: http.IncomingHttpHeaders): ResponseHeadersType {

    const csp = typeof header["content-security-policy"] === "string" ? [header["content-security-policy"]] : header["content-security-policy"] ?? null;

    const xFrameOptions = typeof header["x-frame-options"] === "string" ? [header["x-frame-options"]] : header["x-frame-options"] ?? null;

    const xContentType = typeof header["x-content-type-options"] === "string" ? [header["x-content-type-options"]] : header["x-content-type-options"] ?? null;

    const referrerPolicy = typeof header["referrer-policy"] === "string" ? [header["referrer-policy"]] : header["referrer-policy"] ?? null;

    const permissionsPolicy = typeof header["permissions-policy"] === "string" ? [header["permissions-policy"]] : header["permissions-policy"] ?? null;

    const crossOriginOpenerPolicy = typeof header["cross-origin-opener-policy"] === "string" ? [header["cross-origin-opener-policy"]] : header["cross-origin-opener-policy"] ?? null;

    const crossOriginEmbedderPolicy = typeof header["cross-origin-embedder-policy"] === "string" ? [header["cross-origin-embedder-policy"]] : header["cross-origin-embedder-policy"] ?? null;

    const crossOriginResourcePolicy = typeof header["cross-origin-resource-policy"] === "string" ? [header["cross-origin-resource-policy"]] : header["cross-origin-resource-policy"] ?? null;

    const xRobotsTag = typeof header["x-robots-tag"] === "string" ? [header["x-robots-tag"]] : header["x-robots-tag"] ?? [];

    const cacheControl = typeof header["cache-control"] === "string" ? header["cache-control"] : null;
    const server = typeof header["server"] === "string" ? [header["server"]] : header["server"] ?? null;

    return {
        hsts: header["strict-transport-security"] ?? null,
        csp,
        xFrameOptions,
        xContentType,
        referrerPolicy,
        permissionsPolicy,
        crossOriginOpenerPolicy,
        crossOriginEmbedderPolicy,
        crossOriginResourcePolicy,
        xRobotsTag,
        cacheControl,
        etag: header["etag"] ?? null,
        lastModified: header["last-modified"] ?? null,
        vary: header["vary"] ?? null,
        server,
    }

}