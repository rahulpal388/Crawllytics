import { ResponseHeadersType } from "./responseHeaders.types";


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