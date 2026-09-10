import mongoose from "mongoose";
import { ReportFormatType } from "../report.Types.js";

/*
*   TODO :
    1. add sitemap crawling => boolean
    2. if yes, the depth will be 0,1,2


*/


export type MAX_CRAWL_DEPTH = 1 | 2 | 3;
export type MAX_CRAWL_PAGES = 100 | 200 | 300;

export const LimitTypeEnum = {
    DEPTH: "depth",
    PAGES: "pages"
} as const;

export type CrawlLimitType = {
    type: typeof LimitTypeEnum.DEPTH;
    value: MAX_CRAWL_DEPTH;
} | {
    type: typeof LimitTypeEnum.PAGES;
    value: MAX_CRAWL_PAGES;
};






export type ProjectSettingSchemaType = {
    projectId: mongoose.Types.ObjectId;
    sendReport: boolean;
    reportType: ReportFormatType;
    robotsTxtUrls: string;
    siteMapUrls: string[];
    userAgent: string;
    crawlLimit: CrawlLimitType;
    
}
