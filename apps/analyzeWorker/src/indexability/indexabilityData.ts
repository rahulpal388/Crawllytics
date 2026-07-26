import { PageIndexabilityType } from "@repo/config/types/analysesTypes/perPages/pageIndexability";
import { GatherInfoType } from "@/types/gatherInfoType.js";
export function indexabilityData(gatherInfo: GatherInfoType): PageIndexabilityType {
  const url = gatherInfo.networkInfo.url;
  const statusCode = gatherInfo.networkInfo.statusCode;
  const metaRobots = gatherInfo.htmlHeader.meta.metaRobot;
  const xRobotsTag = gatherInfo.networkInfo.responseHeaders.xRobotsTag;
  const canonicalUrl = gatherInfo.htmlHeader.meta.Canonical;
  const contentType = gatherInfo.networkInfo.responseHeaders.xContentType;
  return {
    url,
    statusCode,
    metaRobots: ["index", "follow"],
    xRobotsTag,
    canonicalUrl,
    contentType: "html/text"
  };
}
