import { LocationType } from "@repo/db/types/logActivitySchema.Types";
import { getIPLocation } from "@repo/lib/location/getLocationByIP";

import { Request } from "express";

export type RequestMetadata = {
    userAgent: string | null;
    ipAddress: string | null;
    location: LocationType;
};


export async function getRequestMetadata(
    req: Request
): Promise<RequestMetadata> {

    const userAgent = req.get("user-agent") ?? null;

    /* TODO :
    *   Remove this hard coded ip address
    */
    const ipAddress = req.ip ?? null;
    const location = await getIPLocation(ipAddress || "127.0.0.1");
    if (!ipAddress || !location) {
        return {
            userAgent,
            ipAddress,
            location: null,
        };
    }



    return {
        userAgent,
        ipAddress,
        location: {
            city: location.city,
            region: location.region,
            country: location.country,
        }
    };
}
