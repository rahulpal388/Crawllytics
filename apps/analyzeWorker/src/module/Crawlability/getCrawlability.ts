import { CrawlabilityTypes } from "@/module/Crawlability/crawlability.types.js";
import { UrlCrawledType } from "@repo/db/types/urlCrawledTypes";




export function getCrawlability(info: UrlCrawledType): CrawlabilityTypes {


    return {
        statusCode: info.networkInfo.statusCode,
        isSuccess: info.networkInfo.statusCode === 200,

        isRedirect: info.networkInfo.statusCode !== null && info.networkInfo.statusCode >= 300 && info.networkInfo.statusCode < 400,
        redirectCount: info.networkInfo.redirectChain.length,
        hasRedirectChain: info.networkInfo.redirectChain.length > 0,
        isRedirectLoop: info.networkInfo.isRedirectLoop,
        finalUrl: info.networkInfo.finalUrl,

        isBlockedByRobots: info.urlAnalyses?.isBlockedByRobotsTxt || false,

        hasNoIndex: info.htmlHeader?.meta.metaRobot.map((meta) => meta.toLowerCase()).includes("noindex") || false,
        hasNoFollow: info.htmlHeader?.meta.metaRobot.map((meta) => meta.toLowerCase()).includes("nofollow") || false,

        isInSiteMap: info.urlAnalyses?.isInSitemap || false,
        isDiscoveredViaSiteMap: info.urlAnalyses?.isDiscoveredViaSiteMap || false,
        isDiscoveredViaInternalLink: info.urlAnalyses?.isDiscoveredViaInternalLink || false,


        internalIncommingLink: 0,
        internalOutgoingLink: 0,
        isOrphan: false,

        crawlDepth: info.urlAnalyses?.crawlDepth || 0,
        urlDepth: info.urlAnalyses?.urlDepth || 0,

        hasCanonical: info.htmlHeader?.meta.Canonical !== undefined,
        canonicalUrl: info.htmlHeader?.meta.Canonical.toString() || null,
        isSelfCanonical: info.htmlHeader?.meta.Canonical.toString() === info.networkInfo.finalUrl,
        canonicalStatusCode: info.htmlHeader?.meta.Canonical !== undefined ? info.networkInfo.statusCode : null,
        canonicalConflict: info.htmlHeader?.meta.Canonical.toString() !== info.networkInfo.finalUrl,

        urlLength: info.networkInfo.finalUrl.length,
        hasQueryParams: info.networkInfo.finalUrl.includes("?"),
        queryParameterCount: info.networkInfo.finalUrl.split("?")[1]?.split("&").length || 0,
        hasFragment: info.networkInfo.finalUrl.includes("#"),
        hasSessionId: info.networkInfo.finalUrl.includes("sessionid"),
        hasTrackingParameter: info.networkInfo.finalUrl.includes("utm_"),
        hasFilterParameter: info.networkInfo.finalUrl.includes("filter="),
        hasSortParameter: info.networkInfo.finalUrl.includes("sort="),

        isHttps: info.networkInfo.finalUrl.startsWith("https://"),

        ttfb: info.networkInfo.timeToFirstByte ?? 0,
        totalResponseTime: info.networkInfo.totalResponseTime ?? 0,
        isSlow: info.networkInfo.totalResponseTime !== null && info.networkInfo.totalResponseTime > 2000,
        is5xx: info.networkInfo.statusCode !== null && info.networkInfo.statusCode >= 500 && info.networkInfo.statusCode < 600,
        is429: info.networkInfo.statusCode === 429,
        contentRequiresJavaScript: false,
        linksRequireJavaScript: false,
        hasBlockedJavaScriptResources: false,
        hasCacheControl: false,
        hasEtag: false,
        hasLastModified: false,
    }

}