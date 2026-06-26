import { PageCrawlabilityAnalysis } from "@repo/config/types/analysesTypes/perPages/pageCrawlability";
import { GatherInfoType } from "@/types/gatherInfoType.js";


export function crawlability(gatherInfo: GatherInfoType): PageCrawlabilityAnalysis {



    const isReachable = gatherInfo.networkInfo.statusCode >= 200 && gatherInfo.networkInfo.statusCode < 400;
    const isBlockedByRobots = gatherInfo.urlAnalyses.isBlockedByRobotsTxt;
    const isBlockedByMetaRobots = gatherInfo.htmlHeader.meta.metaRobot.includes("noindex") || gatherInfo.htmlHeader.meta.metaRobot.includes("nofollow");

    const isBlockedByXRobots = gatherInfo.networkInfo.responseHeaders.xRobotsTag.includes("noindex") || gatherInfo.networkInfo.responseHeaders.xRobotsTag.includes("nofollow");

    const isRedirect = gatherInfo.networkInfo.redirectChain.length > 0;
    const redirectChainLength = gatherInfo.networkInfo.redirectChain.length;
    const isRedirectLoop = gatherInfo.networkInfo.isRedirectLoop;


    const crawlDepth = gatherInfo.urlAnalyses.crawlDepth;
    const discoveredViaInternalLink = gatherInfo.urlAnalyses.isDiscoveredViaInternalLink;
    const discoveredViaSitemap = gatherInfo.urlAnalyses.isDiscoveredViaSiteMap;


    // #########################################
    // calcuate later
    // #########################################
    const score = 0;
    const crawlable = false;
    const isSoft404 = false;
    const canonicalConflict = false;


    return {
        score,
        crawlable,
        isReachable,
        isBlockedByRobots,
        isBlockedByMetaRobots,
        isBlockedByXRobots,
        isRedirect,
        redirectChainLength,
        isRedirectLoop,
        isSoft404,
        canonicalConflict,
        crawlDepth,
        discoveredViaInternalLink,
        discoveredViaSitemap
    }

}


