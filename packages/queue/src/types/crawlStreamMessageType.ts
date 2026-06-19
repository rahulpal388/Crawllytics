import { RobotsTxtType } from "@repo/config/types/robotsTxtType";


export type CrawlStreamMessageType = {
    _id: string;
    storeId: string;
    deDuplicateId: string;
    seedUrl: string;
    url: string;
    maxDepth: string;
    depth: string;
}