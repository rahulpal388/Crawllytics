import { HttpsResponseType } from "@/fetchWebPage.js";
import { EachUrlNetworkResultTypes } from "@/types/eachUrlNetworkTypes.js";


export function eachUrlNetwork(response: HttpsResponseType): EachUrlNetworkResultTypes {

    return {
        url: response.url,
        statusCode: response.statusCode,
        method: response.method,
        protocol: new URL(response.url).protocol,
        redirectTo: null,
        timeToFirstByte: response.timeToFirstByte,
        responseTime: response.responseTime,
        size: parseInt(response.header["content-length"] || "0", 10),
        responseHeaders: {
            "contentType": response.header["content-type"] || null,
            "cacheControl": response.header["cache-control"] || null,
            "contentLength": response.header["content-length"] ? parseInt(response.header["content-length"], 10) : null,
            "server": response.header["server"] ? Array.isArray(response.header["server"]) ? response.header["server"] : [response.header["server"]] : null,
            "xRobotsTag": response.header["x-robots-tag"] ? Array.isArray(response.header["x-robots-tag"]) ? response.header["x-robots-tag"] : [response.header["x-robots-tag"]] : null,
        }
    }

}