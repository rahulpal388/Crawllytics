import { UrlCrawledType } from "@repo/db/types/urlCrawledTypes";
import { PageCrawlabilityAnalysis } from "@repo/config/types/analysesTypes/perPages/pageCrawlability";
import { findInternalIncomingLinks } from "@/utils/findInternalIncomingLinks.js";


export function crawlability(gatherInfo: Omit<UrlCrawledType, "analyzedUrlData">): PageCrawlabilityAnalysis {

    const statusCode = gatherInfo.networkInfo.statusCode;

    const redirectChainLength = gatherInfo.networkInfo.redirectChain.length;
    const isRedirect = redirectChainLength > 0;
    const isRedirectLoop = gatherInfo.networkInfo.isRedirectLoop;

    const robotsTxtBlocked = gatherInfo.urlAnalyses.isBlockedByRobotsTxt;


    // remeaning
    const robotsRuleMatched = null;

    const metaRobots = gatherInfo.htmlHeader.meta.metaRobot.map((item) => item.content);

    const canonicalUrl = gatherInfo.htmlHeader.meta.Canonical.map((item) => item.url);

    const isInSitemap = gatherInfo.urlAnalyses.isInSitemap;

    const urlDepth = gatherInfo.urlAnalyses.urlDepth;

    const internalIncomingLinks = findInternalIncomingLinks();


    return {
        statusCode,
        redirectChainLength,
        isRedirect,
        isRedirectLoop,
        robotsTxtBlocked,
        robotsRuleMatched,
        metaRobots,
        canonicalUrl,
        isInSitemap,
        internalIncomingLinks,
        urlDepth,
    }

}