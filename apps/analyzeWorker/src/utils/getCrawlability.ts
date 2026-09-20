import { EachUrlNetworkResultTypes } from "@repo/contract/types/urlInformationType/eachUrlNetworkTypes";
import { HTMLHeaderType } from "@repo/contract/types/urlInformationType/htmlHeaderResponseTypes";
import { UrlAnalysesType } from "@repo/contract/types/urlInformationType/urlAnalysesTypes";
import { ResponseHeadersType } from "@repo/contract/types/urlInformationType/responseHeadersTypes";

import { CrawlabilityPerPage } from "@repo/contract/types/analysesTypes/crawlabilityTypesPerPage";

export function getCrawlability(
  urlInfo: EachUrlNetworkResultTypes,
  htmlHeader: HTMLHeaderType,
  responseHeader: ResponseHeadersType,
  url: UrlAnalysesType,
): CrawlabilityPerPage {
  return {
    statusCode: urlInfo.statusCode,
    redirectChainLength: urlInfo.redirectChain.length,
    isRedirectLoop: urlInfo.isRedirectLoop,

    robotsTxtBlocked:
      htmlHeader.meta.metaRobot.content.includes("noindex") || url.isBlockedByRobotsTxt,

    metaRobots: htmlHeader.meta.metaRobot.content,
    xRobotsTag: urlInfo.responseHeaders.xRobotsTag,

    canonicalUrl: htmlHeader.meta.Canonical.map((x) => x.url),
    internalIncomingLinks: 1,
    isOrphanPage: false,

    urlDepth: url.urlDepth,

    isInSitemap: false,

    crawlabilityScore: 0, // 0-100
  };
}
