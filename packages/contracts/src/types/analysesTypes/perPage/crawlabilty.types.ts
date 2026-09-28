import { FetchErrorType } from "@repo/contracts/types/crawl/urlCrawl/network/eachUrlNetworkTypes";



export type CrawlabilityAnalysisTypes = {

    // Fetch
    statusCode: number | null;
    isSuccess: boolean;
    is5xx: boolean;
    is429: boolean;
    fetchError: FetchErrorType | null;

    // Robots
    isBlockedByRobotsTxt: boolean;

    // Discovery
    isInSiteMap: boolean;
    isDiscoveredViaSiteMap: boolean;
    isDiscoveredViaInternalLink: boolean;
    internalIncommingLink: number;
    internalOutgoingLink: number;
    isOrphan: boolean;

    // Depth
    crawlDepth: number;
    urlDepth: number;

    // URL
    urlLength: number;
    hasQueryParams: boolean;
    queryParameterCount: number;
    hasFragment: boolean;
    hasSessionId: boolean;
    hasTrackingParameter: boolean;

    // Protocol
    isHttps: boolean;

    // Server
    ttfb: number;
    totalResponseTime: number;
};