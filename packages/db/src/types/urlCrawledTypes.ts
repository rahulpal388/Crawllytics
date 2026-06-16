import { EachUrlNetworkResultTypes } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { HTMLHeaderType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { HTMLHeadingContentsType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";
import { HTMLLinksType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import { HTMLMediaTypes } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import { HTMLStructureDataType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";
import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes";
import { MobileUIUXType } from "@repo/config/types/urlInformationType/mobileUIUXTypes";
import { UrlAnalysesType } from "@repo/config/types/urlInformationType/urlAnalysesTypes";
import { PerformanceSignalType } from "@repo/config/types/urlInformationType/performanceSignalTypes";
import { AccessibilityType } from "@repo/config/types/urlInformationType/accessibilityTypes";
import { Schema } from "mongoose";

export type UrlCrawledType = {
    networkInfo: EachUrlNetworkResultTypes;
    htmlHeader: HTMLHeaderType;
    htmlHeadingContent: HTMLHeadingContentsType;
    links: HTMLLinksType;
    media: HTMLMediaTypes;
    structureData: HTMLStructureDataType;
    mobileUIUX: MobileUIUXType;
    urlAnalyses: UrlAnalysesType;
    performanceSignals: PerformanceSignalType;
    htmlDocument: HTMLDocumentType;
    accessibility: AccessibilityType;
    analyzedUrlData: Schema.Types.ObjectId | null;
}