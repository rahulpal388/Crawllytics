// ######################################
// page -> overview response type

import { CategoryType } from "./categoryType.js";
import { SeverityType } from "./severityType.js";

// ######################################
export type URLInfoType = {
  url: string;
  status: number;
  contentType: string;
  pageScore: number;
  pageSize: number;
  canonicalUrl: string;
  httpVersion: string;
  responseTime: number;
  compression: string;
  server: string;
  lastModified: string;
  redirect: string;
};

export type HTTPHeaderType = {
  server: string;
  date: string;
  contentType: string;
  transferEncoding: string;
  contentEncoding: string;
  connection: string;
  cacheControl: string;
  etag: string;
  lastModified: string;
  vary: string;
  strictTransportSecurity: string;
  contentSecurityPolicy: string;
  xContentTypeOptions: string;
  xFrameOptions: string;
  referrerPolicy: string;
};

export type CrawlingAndIndexingType = {
  robotsTxt: string;
  robotsRuleMatched: string;
  crawlDepth: number;
  redirectChainLength: number;
  redirectLoop: boolean;
  sitemap: string;
  discoveredVia: string;
  orphanPage: boolean;
  indexability: string;
  metaRobots: string;
  xRobotsTag: string;
  canonicalUrl: string;
  canonicalStatusCode: number;
  canonicalConflict: boolean;
};

export type OverviewResponseType = {
  urlInfo: URLInfoType;
  httpHeaders: HTTPHeaderType;
  crawlingAndIndexing: CrawlingAndIndexingType;
};

// ######################################
//  page issues -> issues response type
// ######################################

export type PageIssuesResponseType = {
  title: string;
  totalIssues: number;
  severity: Exclude<SeverityType, "all">;
  category: Exclude<CategoryType, "all">;
  issues: {
    id: string;
    description: string;
  }[];
};
