import { deCompress } from "@/utils/eachNetworkUrl/deCompress.js";
import { handleRedirect } from "@/utils/eachNetworkUrl/handleRedirect.js";
import { parseResponseHeader } from "@/utils/eachNetworkUrl/parseResponseHeader.js";
import {
  CompressionEncodingType,
  EachUrlNetworkResultTypes,
  RedirectChainType,
} from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { findCdnProvider } from "@repo/lib/findCdnProvider";
import { getUnCompressedSize } from "@repo/lib/getUnCompressedSize";
import https from "https";
import { headerConfig } from "@repo/config/constant/fetchHeaderConfig";

export async function fetchWebPageAndNetworkInfo(
  url: URL,
  redirectChain: RedirectChainType[],
): Promise<
  | {
      success: true;
      data: {
        html: string;
        eachUrlNetwork: EachUrlNetworkResultTypes;
      };
    }
  | {
      success: false;
      data: null;
    }
> {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: headerConfig,
    });

    let timeToFirstByte = performance.now();
    let totalResponseTime = performance.now();
    let html = "";
    let isRedirectLoop = false;
    let isCompressed = false;
    let transferSize = 0;
    let buffer: Buffer[] = [];
    let uncompressedSize = 0;
    let compressionEncoding: CompressionEncodingType = null;
    let cdnProvider: string | null = null;

    req.on("response", async (res) => {
      timeToFirstByte = performance.now() - timeToFirstByte;
      isCompressed = !!res.headers["content-encoding"];
      cdnProvider = findCdnProvider(res.headers as Record<string, string>);

      // ###################################################
      // handle redirects
      // ###################################################
      const statusCode = res.statusCode;
      if (statusCode && statusCode.toString().startsWith("3")) {
        const redirect = await handleRedirect(res, redirectChain);
        isRedirectLoop = redirect.isRedirectLoop;
        if (redirect.isRedirect && redirect.redirectUrl && !redirect.isRedirectLoop) {
          redirectChain.push({
            sourceUrl: url.href,
            redirectedTo: redirect.redirectUrl,
            statusCode,
          });
          const redirectUrl = new URL(redirect.redirectUrl, url);
          const redirectResult = await fetchWebPageAndNetworkInfo(redirectUrl, redirectChain);
          return resolve(redirectResult);
        } else {
          return resolve({
            success: false,
            data: null,
          });
        }
      }

      // ###################################################
      // Return if the content is not HTML
      // ###################################################

      const contentType = res.headers["content-type"];

      if (!contentType?.includes("text/html")) {
        return resolve({
          success: false,
          data: null,
        });
      }

      // ###################################################
      // collect header information
      // ###################################################

      const header = parseResponseHeader(res);

      res.on("data", (chunk) => {
        transferSize += chunk.length;
        buffer.push(chunk);
      });

      res.on("end", () => {
        totalResponseTime = performance.now() - totalResponseTime;
        compressionEncoding = (res.headers["content-encoding"] as CompressionEncodingType) ?? null;
        html = deCompress(Buffer.concat(buffer), compressionEncoding);
        uncompressedSize = compressionEncoding
          ? getUnCompressedSize(buffer, compressionEncoding)
          : transferSize;
        resolve({
          success: true,
          data: {
            html,
            eachUrlNetwork: {
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
                hsts: header.hsts,
                csp: header.csp,
                xFrameOptions: header.xFrameOptions,
                xContentTypeOptions: header.xContentTypeOptions,
                referrerPolicy: header.referrerPolicy,
                permissionsPolicy: header.permissionsPolicy,
                xRobotsTag: header.xRobotsTag,
                cacheControl: header.cacheControl,
                etag: header.etag,
                lastModified: header.lastModified,
                vary: header.vary,
              },
            },
          },
        });
      });
    });

    // ###################################################
    // Network Timing Metrics Collection
    // ###################################################

    let dnsLookupTime = performance.now();
    let tcpConnectTime: number;
    let tlsHandshakeTime: number; // will be 0 for http
    req.on("socket", (socket) => {
      socket.on("lookup", () => {
        dnsLookupTime = performance.now() - dnsLookupTime;
      });
      tcpConnectTime = performance.now();

      socket.on("connect", () => {
        tcpConnectTime = performance.now() - tcpConnectTime;
      });

      tlsHandshakeTime = performance.now();
      socket.on("secureConnect", () => {
        tlsHandshakeTime = performance.now() - tlsHandshakeTime;
      });
    });

    req.setTimeout(10_000, () => {
      req.destroy();
      resolve({
        success: false,
        data: null,
      });
    });

    req.on("error", () => {
      resolve({
        success: false,
        data: null,
      });
    });
  });
}
