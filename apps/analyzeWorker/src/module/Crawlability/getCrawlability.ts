import { UrlCrawledType } from "@repo/db/types/urlCrawledTypes";
import { CrawlabilityAnalysisTypes } from "@repo/contracts/types/analysesTypes/perPage/crawlabilty.types";


export function getCrawlability(info: UrlCrawledType): CrawlabilityAnalysisTypes {


    return {
        statusCode: info.networkInfo.statusCode,
        isSuccess: info.networkInfo.statusCode === 200,
        fetchError: null,

        isBlockedByRobotsTxt: info.urlAnalyses?.isBlockedByRobotsTxt || false,


        isInSiteMap: info.urlAnalyses?.isInSitemap || false,
        isDiscoveredViaSiteMap: info.urlAnalyses?.isDiscoveredViaSiteMap || false,
        isDiscoveredViaInternalLink: info.urlAnalyses?.isDiscoveredViaInternalLink || false,


        internalIncommingLink: 0,
        internalOutgoingLink: 0,
        isOrphan: false,

        crawlDepth: info.urlAnalyses?.crawlDepth || 0,
        urlDepth: info.urlAnalyses?.urlDepth || 0,



        urlLength: info.networkInfo.finalUrl.length,
        hasQueryParams: info.networkInfo.finalUrl.includes("?"),
        queryParameterCount: info.networkInfo.finalUrl.split("?")[1]?.split("&").length || 0,
        hasFragment: info.networkInfo.finalUrl.includes("#"),
        hasSessionId: info.networkInfo.finalUrl.includes("sessionid"),
        hasTrackingParameter: info.networkInfo.finalUrl.includes("utm_"),

        isHttps: info.networkInfo.finalUrl.startsWith("https://"),

        ttfb: info.networkInfo.timeToFirstByte ?? 0,
        totalResponseTime: info.networkInfo.totalResponseTime ?? 0,
        is5xx: info.networkInfo.statusCode !== null && info.networkInfo.statusCode >= 500 && info.networkInfo.statusCode < 600,
        is429: info.networkInfo.statusCode === 429,

    }

}