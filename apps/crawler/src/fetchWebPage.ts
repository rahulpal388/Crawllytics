import { IncomingHttpHeaders } from "http";
import { CompressionEncodingType, EachUrlNetworkResultTypes, RedirectChainType } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { HSTSType, CacheControlType } from "@repo/config/types/urlInformationType/responseHeadersTypes";
import { findCdnProvider } from "@repo/lib/findCdnProvider";
import { getUnCompressedSize } from "@repo/lib/getUnCompressedSize";
import https from "https";


const MAX_REDIRECTS = 3;


export async function fetchWebPage(
    url: URL,
    redirectChain: RedirectChainType[],
    visitedUrls: Set<String>
): Promise<
    | {
        success: true;
        data: {
            html: string;
            response: EachUrlNetworkResultTypes;
        };
    }
    | {
        success: false;
        data: null;
    }
> {

    return new Promise((resolve) => {
        const req = https.get(url, {
            headers: {
                "accept-encoding":
                    "gzip, br, deflate",

                "user-agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/135.0.0.0 Safari/537.36"
            }
        });



        visitedUrls.add(url.toString());

        let timeToFirstByte = performance.now();
        let totalResponseTime = performance.now();
        let isRedirectLoop = false;
        let isCompressed = false;
        let transferSize = 0;
        let buffer: Buffer[] = [];
        let uncompressedSize = 0;
        let compressionEncoding: CompressionEncodingType = null;
        let cdnProvider: string | null = null;

        let hsts: HSTSType | null = null;
        let csp: string[] = [];
        let xFrameOptions: 'DENY' | 'SAMEORIGIN' | null = null;
        let xContentTypeOptions = false;
        let referrerPolicy: string | null = null;
        let permissionsPolicy: string | null = null;
        let xRobotsTag: string[] = [];
        let cacheControl: CacheControlType | null = null;
        let etag: string | null = null;
        let lastModified: string | null = null;
        let vary: string | null = null;

        req.on("response", async (res) => {
            timeToFirstByte = performance.now() - timeToFirstByte;
            isCompressed = !!res.headers["content-encoding"]
            cdnProvider = findCdnProvider(res.headers as Record<string, string>);

            // ###############  check for redirects ###############
            const statusCode = res.statusCode;
            if (statusCode && statusCode.toString().startsWith("3")) {
                const location = res.headers["location"];
                if (location && typeof location === "string") {
                    redirectChain.push({
                        sourceUrl: url.href,
                        redirectedTo: location,
                        statusCode: statusCode,
                    })

                    if (redirectChain.length > MAX_REDIRECTS || visitedUrls.has(location)) {
                        isRedirectLoop = visitedUrls.has(location);
                        resolve({
                            success: false,
                            data: null
                        });
                    } else {
                        resolve(await fetchWebPage(new URL(location, url.origin), redirectChain, visitedUrls));
                    }

                }

            }


            // ############### collect header information ###############
            const getHsts = res.headers["strict-transport-security"] ?? null;
            if (getHsts) {
                const hstsParts = getHsts.split(";").map(part => part.trim());
                const maxAge = hstsParts.find(part => part.startsWith("max-age="))?.split("=")[1] || "0";
                hsts = {
                    value: getHsts,
                    maxAge: parseInt(maxAge),
                    includeSubdomains: hstsParts.includes("includeSubDomains"),
                    preload: hstsParts.includes("preload")
                }
            }

            csp = Array.isArray(res.headers["content-security-policy"])
                ? res.headers["content-security-policy"]
                : res.headers["content-security-policy"]
                    ? [res.headers["content-security-policy"]]
                    : [];


            const frame = res.headers["x-frame-options"];
            if (typeof frame === "string") {
                xFrameOptions = frame.toUpperCase() === "DENY" ? "DENY" : frame.toUpperCase() === "SAMEORIGIN" ? "SAMEORIGIN" : null;
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
                const cacheControlParts = cacheControlHeader.split(",").map(part => part.trim());
                cacheControl = {
                    maxAge: cacheControlParts.find(part => part.startsWith("max-age=")) ? parseInt(cacheControlParts.find(part => part.startsWith("max-age="))?.split("=")[1] || "0") : null,
                    noCache: cacheControlParts.includes("no-cache"),
                    noStore: cacheControlParts.includes("no-store"),
                    sMaxAge: cacheControlParts.find(part => part.startsWith("s-maxage=")) ? parseInt(cacheControlParts.find(part => part.startsWith("s-maxage="))?.split("=")[1] || "0") : null,
                    mustRevalidate: cacheControlParts.includes("must-revalidate"),
                    isImmutable: cacheControlParts.includes("immutable")
                }
            }

            etag = res.headers["etag"] ?? null;

            lastModified = res.headers["last-modified"] ?? null;

            vary = res.headers["vary"] ?? null;








            res.on("data", (chunk) => {
                transferSize += chunk.length;
                buffer.push(chunk);
            })
            compressionEncoding = res.headers["accept-encoding"] as CompressionEncodingType || null;
            uncompressedSize = compressionEncoding ? getUnCompressedSize(buffer, compressionEncoding) : 0;


            res.on("end", () => {
                totalResponseTime = performance.now() - totalResponseTime;

                resolve({
                    success: true,
                    data: {
                        html: "",
                        response: {
                            url: url.href,
                            statusCode: res.statusCode ?? 0,
                            httpVersion: `HTTP/${res.httpVersion}` as "HTTP/1.1" | "HTTP/2" | "HTTP/3",
                            method: "GET",
                            protocol: url.protocol.replace(":", "") as "http" | "https",
                            dnsLookupTime,
                            tcpConnectTime: tcpConnectTime ?? 0,
                            tlsHandshakeTime: tlsHandshakeTime ?? 0,
                            timeToFirstByte,
                            totalResponseTime,
                            transferSize,
                            uncompressedSize,
                            compressionEncoding,
                            redirectChain,
                            isRedirectLoop,
                            isCompressed,
                            cdnProvider,
                            responseHeaders: {
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
                                vary
                            }
                        }
                    }
                })
            });



        })




        // ######################### Network Timing Metrics Collection #########################

        let dnsLookupTime = performance.now();
        let tcpConnectTime: number;
        let tlsHandshakeTime: number; // will be 0 for http
        req.on("socket", (socket) => {
            socket.on("lookup", () => {
                dnsLookupTime = performance.now() - dnsLookupTime;
            })
            tcpConnectTime = performance.now();

            socket.on("connect", () => {
                tcpConnectTime = performance.now() - tcpConnectTime;
            })

            tlsHandshakeTime = performance.now();
            socket.on("secureConnect", () => {
                tlsHandshakeTime = performance.now() - tlsHandshakeTime;
            })
        })

        req.setTimeout(10_000, () => {
            req.destroy();
            resolve({
                success: false,
                data: null
            });
        })

        req.on("error", () => {

            resolve({
                success: false,
                data: null
            });

        });

    })


}