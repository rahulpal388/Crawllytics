import { getHttpClient, getHttpAgent } from "@/lib/getHttpClient.js";
import { EachUrlNetworkResultTypes, RedirectChainType } from "@repo/contracts/types/urlInformationType/eachUrlNetworkTypes";
import http from "node:http";
import { performance } from "node:perf_hooks";
import { TLSSocket } from "node:tls";
import { headerConfig } from "@repo/contracts/constant/fetchHeaderConfig"
import { SocketAddress } from "node:net";
import { permission } from "node:process";
import { normalizeURL } from "@/lib/normalizeUrl.js";
import { normalizeHttpVersion } from "@/lib/getNormalizeHttpVersion.js";
import { getFetchError } from "@/lib/getFetchError.js";
import https from "node:https";

const REDIRECT_LIMIT = 3;
const REDIRECT_STATUS_CODES = new Set([
  301,
  302,
  303,
  307,
  308,
]);

const SET_TIMEOUT = 30_000

const REQUEST_OPTIONS: http.RequestOptions = {
  method: "GET",
  headers: headerConfig,
  timeout: SET_TIMEOUT,

}


export async function fetchPageAndNetworkInfo(
  url: URL,
  redirectChain: RedirectChainType[],
  visitedUrls: Set<string>,
  isRedirectLoop: boolean
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
    data: {
      eachUrlNetwork: EachUrlNetworkResultTypes;
    };
  }
> {

  return new Promise((resolve) => {
    const client = getHttpClient(url.protocol);
    const agent = getHttpAgent(url.protocol);




    let dnsLookupTime: number | null = null;
    let tcpConnectTime: number | null = null;
    let tlsHandshakeTime: number | null = null;
    let ipAddress: string | null = null;
    let timeToFirstByte: number | null = null;
    let totalResponseTime: number | null = null;
    let connectionReused: boolean = false;
    let timeOut = false;
    let transferSize: number = 0;

    let firstByteReceived = false;



    const start = performance.now();


    const req = client.request(url, { ...REQUEST_OPTIONS, agent },

      (res) => {
        console.log(`Response received for URL: ${url.href}`);
        const statusCode = res.statusCode ?? null;

        /*
        * Check the status code for redirection.
        */
        if (statusCode && !isRedirectLoop && redirectChain.length <= REDIRECT_LIMIT) {
          const isRedirect = REDIRECT_STATUS_CODES.has(statusCode);
          const newUrl = normalizeURL(res.headers.location ?? "", url.href);
          if (isRedirect && newUrl) {

            // check for redirect loop
            if (visitedUrls.has(newUrl.href)) {
              //  redirect loop detected
              isRedirectLoop = true;
            }

            // add the url to visitedUrls
            visitedUrls.add(newUrl.href);


            // create a redirect chain
            redirectChain.push({
              sourceUrl: url.href,
              redirectedTo: newUrl.href,
              statusCode
            })
            // HTTP agent may keep sockets occupied and this becomes especially problematic when crawling many URLs.
            res.resume();
            resolve(
              fetchPageAndNetworkInfo(newUrl, redirectChain, visitedUrls, isRedirectLoop)
            )
          }
        }

        const chunks: Buffer[] = [];
        res.on("data", (chunk: Buffer) => {
          if (!firstByteReceived) {
            timeToFirstByte = performance.now() - start;
            firstByteReceived = true;
          }
          chunks.push(chunk)
          transferSize += chunk.length;
        });

        res.on("end", () => {
          totalResponseTime = performance.now() - start;
          const bufferBody = Buffer.concat(chunks)
          const html = bufferBody.toString("utf-8")
          console.log("Content-Encoding:", res.headers["content-encoding"]);
          console.log("Content-Type:", res.headers["content-type"]);
          resolve({
            success: true,
            data: {
              html,
              eachUrlNetwork: {
                requestedUrl: redirectChain.length === 0 ? url.href : redirectChain[0]!.sourceUrl,
                finalUrl: url.href,
                method: res.method as "GET",
                protocol: url.protocol as "http:" | "https:",
                httpVersion: normalizeHttpVersion(res.httpVersion),
                statusCode,
                fetchError: null,
                ipAddress,
                cdnProvider: null,
                dnsLookupTime,
                tlsHandshakeTime,
                tcpConnectTime,
                timeToFirstByte,
                totalResponseTime,
                connectionReused,

                contentType: res.headers["content-type"] ?? null,
                transferSize,
                uncompressedSize: 0,
                compressionEncoding: null,
                isCompressed: false,

                redirectChain,
                isRedirectLoop,
                retryCount: 0
              }
            }
          })
        })
      }
    )



    req.on("socket", (socket) => {
      ipAddress = socket.remoteAddress ?? null
      connectionReused = req.reusedSocket;
      if (!req.reusedSocket) {
        const socketStart = performance.now();


        socket.once("lookup", () => {
          dnsLookupTime = performance.now() - socketStart;
        })

        socket.once("connect", () => {
          tcpConnectTime = performance.now() - socketStart;
        })

        if (url.protocol === "https:") {
          const tlsSocket = socket as TLSSocket;
          tlsSocket.once("secureConnect", () => {
            tlsHandshakeTime = performance.now() - socketStart;
          })
        }
      }
    })

    req.setTimeout(
      SET_TIMEOUT,
      () => {
        timeOut = true;
        req.destroy(new Error("Request timed out"));
      }
    )



    req.on("error", (err: NodeJS.ErrnoException) => {
      const fetchError = getFetchError(err, timeOut);

      resolve({
        success: false,
        data: {
          eachUrlNetwork: {
            requestedUrl: redirectChain.length === 0 ? url.href : redirectChain[0]!.sourceUrl,
            finalUrl: url.href,
            method: req.method as "GET",
            protocol: url.protocol as "http:" | "https:",
            httpVersion: null,
            statusCode: null,
            fetchError,
            ipAddress,
            cdnProvider: null,
            dnsLookupTime,
            tlsHandshakeTime,
            tcpConnectTime,
            timeToFirstByte,
            totalResponseTime,
            connectionReused,

            contentType: null,
            transferSize,
            uncompressedSize: 0,
            compressionEncoding: null,
            isCompressed: false,

            redirectChain,
            isRedirectLoop,
            retryCount: 0
          }
        }
      })

    })

    req.end();

  })



}


