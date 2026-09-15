import { EachUrlNetworkResultTypes } from "@repo/contracts/types/crawl/eachUrl/eachUrlNetworkTypes";
import { HTMLHeaderType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlHeaderResponseTypes";
import { HTMLLinkType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlLinksTypes";
import { HTMLStructureDataType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlStructureDataTypes";
import { HTMLDocumentType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlDocumentTypes";
import { UrlAnalysesType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/urlAnalysesTypes";
import { PerformanceSignalType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/performanceSignalTypes";
import { AccessibilityType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/accessibilityTypes";
import { Schema } from "mongoose";
import { MobileHtmlDataType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/HTMLMobileType";
import { HTMLMediaTypes } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/HTMLMediaTypes/htmlMediaTypes";
import { HTMLHeadingContentType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlHeadingContentsTypes";
import mongoose from "mongoose";

export type UrlCrawledType = {
  projectId: mongoose.Types.ObjectId;
  networkInfo: EachUrlNetworkResultTypes;
  htmlHeader: HTMLHeaderType;
  htmlHeadingContent: HTMLHeadingContentType;
  links: HTMLLinkType[];
  media: HTMLMediaTypes;
  structureData: HTMLStructureDataType;
  mobileUIUX: MobileHtmlDataType;
  urlAnalyses: UrlAnalysesType;
  performanceSignals: PerformanceSignalType;
  htmlDocument: HTMLDocumentType;
  accessibility: AccessibilityType;
};

