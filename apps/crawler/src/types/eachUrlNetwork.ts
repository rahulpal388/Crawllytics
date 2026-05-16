import { ResponseHeadersType } from "@/types/responseHeaders.js";


export type EachUrlNetworkResultTypes = {
    url: string;
    statusCode: number;
    method: string;
    protocol: string;

    // redirect info
    redirectTo: string | null;

    timeToFirstByte: number;
    responseTime: number;
    size: number;

    responseHeaders: ResponseHeadersType;

}