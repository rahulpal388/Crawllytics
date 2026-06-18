import { RobotsTxtType } from "@repo/config/types/robotsTxtType";



export type CrawlStatusType =
    | "pending"
    | "crawling"
    | "analyzing"
    | "completed"
    | "failed";

export type CrawlStateType = {
    _id: string;
    seedUrl: string;

    discoveredUrls: number;
    crawledUrls: number;
    failedUrls: number;

    status: CrawlStatusType;

    robotsTxt: RobotsTxtType | null;
}