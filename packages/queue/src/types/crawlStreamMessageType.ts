import { RobotsTxtType } from "@repo/config/types/robotsTxtType";


export type CrawlStreamMessageType = {
    _id: string;
    storeId: string;
    seedUrl: string;
    url: string;
}