import { EachUrlNetworkResultTypes } from "@repo/contracts/types/crawl/urlCrawl/network/eachUrlNetworkTypes";
import { HTMLHeaderType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlHeaderResponseTypes";
import { UrlAnalysesType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/urlAnalysesTypes";
import { ResponseHeadersType } from "@repo/contracts/types/crawl/urlCrawl/network/responseHeadersTypes";

import { CrawlabilityAnalysisTypes } from "@repo/contracts/types/analysesTypes/perPage/crawlabilty.types";

export function getCrawlability(
  urlInfo: EachUrlNetworkResultTypes,
  htmlHeader: HTMLHeaderType,
  responseHeader: ResponseHeadersType,
  url: UrlAnalysesType,
): CrawlabilityAnalysisTypes {
  return {
    statusCode: urlInfo.statusCode,
    isSuccess: urlInfo.statusCode === 200,
    is5xx: urlInfo.statusCode !== null && urlInfo.statusCode >= 500 && urlInfo.statusCode < 600,
    is429: urlInfo.statusCode === 429,
    fetchError: urlInfo.fetchError,
    isBlockedByRobotsTxt: url.isBlockedByRobotsTxt,
    isInSiteMap: url.isInSitemap,
    isDiscoveredViaSiteMap: url.isDiscoveredViaSiteMap,
    isDiscoveredViaInternalLink: url.isDiscoveredViaInternalLink,
    internalIncommingLink: 0,
    internalOutgoingLink: 0,
    isOrphan: false,
    crawlDepth: url.crawlDepth,
    urlDepth: url.urlDepth,
    urlLength: urlInfo.finalUrl.length,
    hasQueryParams: url.hasQueryParams,
    queryParameterCount: url.queryParams.length,
    hasFragment: url.hasFragment,
    hasSessionId: urlInfo.finalUrl.includes("sessionid"),
    hasTrackingParameter: urlInfo.finalUrl.includes("utm_"),
    isHttps: urlInfo.finalUrl.startsWith("https://"),
    ttfb: urlInfo.timeToFirstByte ?? 0,
    totalResponseTime: urlInfo.totalResponseTime ?? 0,
  };
}
