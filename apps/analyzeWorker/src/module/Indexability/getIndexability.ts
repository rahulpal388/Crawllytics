import { IndexabilityAnalysisTypes } from "@repo/contracts/types/analysesTypes/perPage/indexability.types";

import { UrlCrawledType } from "@repo/db/types/urlCrawledTypes";


export function getIndexability(info: UrlCrawledType): IndexabilityAnalysisTypes {


    return {
        statusCode: info.networkInfo.statusCode,
        isSuccess: info.networkInfo.statusCode === 200,
        is3xx: info.networkInfo.statusCode !== null && info.networkInfo.statusCode >= 300 && info.networkInfo.statusCode < 400,
        is404: info.networkInfo.statusCode === 404,
        is5xx: info.networkInfo.statusCode !== null && info.networkInfo.statusCode >= 500 && info.networkInfo.statusCode < 600,
        isSoft404: false,

        isRedirect: info.networkInfo.statusCode !== null && info.networkInfo.statusCode >= 300 && info.networkInfo.statusCode < 400,
        redirectCount: 0,
        hasRedirectChain: true,
        isRedirectLoop: false,
        finalUrl: info.networkInfo.finalUrl,

        metaRobots: null,
        xRobotsTag: null,

        isNoIndex: false,
        noFollow: false,
        noSnippet: false,

        hasCanonical: false,
        canonicalUrl: null,
        isSelfCanonical: false,

        isAbsoluteCanonical: false,
        canonicalStatusCode: null,
        isNoIndexCanonical: false,
        canonicalConflict: false,

        isInSiteMap: info.urlAnalyses?.isInSitemap || false,

        contentRequiresJavaScript: false,
        hasBlockedJavaScriptResources: false,
    }

}