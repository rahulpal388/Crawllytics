import { htmlHeaderExtractor } from "@/extractor/htmlHeader.js";
import { UrlCrawledType } from "@repo/db/types/urlCrawledTypes";
import { htmlLinksExtractor } from "@/extractor/htmlLinks.js";
import { htmlMediaExtractor } from "@/extractor/htmlMediaExtractor.js";
import { htmlStructureData } from "@/extractor/htmlStructureData.js";
import { urlAnalyses } from "@/extractor/urlAnalyses.js";
import { performanceSignal } from "@/extractor/performanceSignal.js";
import { htmlDocument } from "@/extractor/htmlDocument.js";
import { accessibilityInfo } from "@/extractor/accessibility.js";
import * as cheerio from "cheerio";
import { htmlHeadingContentsExtractor } from "@/extractor/htmlHeadingContents.js";
import { getMobileHtmlData } from "@/extractor/mobileHtmlData.js";

export type GatherInformationType = Omit<UrlCrawledType, "networkInfo" | "analyzedUrlData">;

export async function getGatherInformation(
  html: string,
  url: URL,
  crawlDepth: number,
) {
  console.log("Gathering Information for URL:", url.href);
}


