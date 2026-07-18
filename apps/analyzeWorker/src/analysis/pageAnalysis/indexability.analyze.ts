import { PageIndexabilityType } from "@repo/config/types/analysesTypes/perPages/pageIndexability";
import { GatherInfoType } from "@/types/gatherInfoType.js";
export function indexabilityAnalysis(gatherInfo: GatherInfoType): PageIndexabilityType {
  const statusCode = gatherInfo.networkInfo.statusCode;
  const metaRobots = gatherInfo.htmlHeader.meta.metaRobot;
  const xRobotsTag = gatherInfo.networkInfo.responseHeaders.xRobotsTag;
  const canonicalUrl = gatherInfo.htmlHeader.meta.Canonical.map((canonical) => canonical.url);
  const isInSitemap = gatherInfo.urlAnalyses.isInSitemap;
  const redirectTarget =
    gatherInfo.networkInfo.redirectChain[gatherInfo.networkInfo.redirectChain.length - 1]
      ?.redirectedTo || null;

  return {
    statusCode,
    metaRobots,
    xRobotsTag,
    canonicalUrl,
    isInSitemap,
    redirectTarget,
  };
}
