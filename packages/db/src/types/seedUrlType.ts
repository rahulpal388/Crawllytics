import { Schema } from "mongoose";
import { UserAgentType } from "@repo/config/types/robotsTxtType"

export type SeedUrlType = {
    status: boolean;
    robotsTxt: UserAgentType[];
    siteMapXMLUrls: string[];
    urlCrawled: Schema.Types.ObjectId[];
    analyzedData: Schema.Types.ObjectId | null;
}