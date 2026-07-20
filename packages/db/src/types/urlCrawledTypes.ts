import { EachUrlNetworkResultTypes } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { HTMLHeaderType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { HTMLLinkType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import { HTMLStructureDataType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";
import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes";
import { UrlAnalysesType } from "@repo/config/types/urlInformationType/urlAnalysesTypes";
import { PerformanceSignalType } from "@repo/config/types/urlInformationType/performanceSignalTypes";
import { AccessibilityType } from "@repo/config/types/urlInformationType/accessibilityTypes";
import { Schema } from "mongoose";
import { MobileHtmlDataType } from "@repo/config/types/urlInformationType/HTMLMobileType";
import { HTMLMediaTypes } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlMediaTypes";
import { HTMLHeadingContentType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";

export type UrlCrawledType = {
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
  analyzedUrlData: Schema.Types.ObjectId | null;
};
