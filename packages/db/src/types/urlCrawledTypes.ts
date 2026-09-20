import { HTMLHeaderType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlHeaderResponseTypes";
import { HTMLLinkType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlLinksTypes";
import { HTMLStructureDataType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlStructureDataTypes";
import { HTMLDocumentType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlDocumentTypes";
import { UrlAnalysesType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/urlAnalysesTypes";
import { PerformanceSignalType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/performanceSignalTypes";
import { AccessibilityType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/accessibilityTypes";
import { MobileHtmlDataType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/HTMLMobileType";
import { HTMLMediaTypes } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/HTMLMediaTypes/htmlMediaTypes";
import { HTMLHeadingContentType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlHeadingContentsTypes";
import mongoose from "mongoose";
import { EachUrlNetworkResultTypes } from "@repo/contracts/types/crawl/urlCrawl/network/eachUrlNetworkTypes";

export type UrlCrawledType = {
  projectId: mongoose.Types.ObjectId;
  url: string;
  networkInfo: EachUrlNetworkResultTypes;
  htmlHeader: HTMLHeaderType | null;
  htmlHeadingContent: HTMLHeadingContentType | null;
  links: HTMLLinkType[];
  media: HTMLMediaTypes | null;
  structureData: HTMLStructureDataType | null;
  mobileUIUX: MobileHtmlDataType | null;
  urlAnalyses: UrlAnalysesType | null;
  performanceSignals: PerformanceSignalType | null;
  htmlDocument: HTMLDocumentType | null;
  accessibility: AccessibilityType | null;
};
