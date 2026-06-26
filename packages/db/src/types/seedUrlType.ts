import { Schema } from "mongoose";
import { UserAgentType } from "@repo/config/types/robotsTxtType"


export const statusValues = [
    "created",
    "queued",
    "in-progress",
    "completed",
    "failed"
] as const;

export type StatusType =
    typeof statusValues[number];


export type SeedUrlType = {
    status: StatusType;
    seedUrl: string;
    robotsTxt: UserAgentType[];
    siteMapXMLUrls: string[];
    siteMaps: string[];
    urlCrawled: Schema.Types.ObjectId[];
    analyzedData: Schema.Types.ObjectId | null;
}