import { ResponseHeadersType } from "./responseHeadersTypes.js";





export type CompressionEncodingType = "gzip" | "br" | "zstd" | "deflate" | null;

export type RedirectChainType = {
    sourceUrl: string;
    redirectedTo: string,
    statusCode: number,
}

export type EachUrlNetworkResultTypes = {
    url: string;
    statusCode: number;
    httpVersion: "HTTP/1.0" | "HTTP/1.1" | "HTTP/2" | "HTTP/3";
    method: string;
    protocol: "http" | "https";


    dnsLookupTime: number  // (ms)
    tcpConnectTime: number  // (ms)
    tlsHandshakeTime: number  // (ms)
    timeToFirstByte: number  // (ms)
    totalResponseTime: number  // (ms)


    transferSize: number  // (bytes, gzipped)
    uncompressedSize: number  // (bytes)
    compressionEncoding: CompressionEncodingType;

    redirectChain: RedirectChainType[];
    isRedirectLoop: boolean;
    isCompressed: boolean;

    cdnProvider: string | null; // detect from CF-Ray, X-Cache, X-Served-By headers

    responseHeaders: ResponseHeadersType;
}