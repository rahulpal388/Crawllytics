import { htmlHeaderExtractor } from "@/extractor/htmlHeader.js";
import { htmlContentsExtractor } from "@/extractor/htmlHeadingContents.js";
import { UrlCrawledType } from "@repo/db/types/urlCrawledTypes";
import { htmlLinksExtractor } from "@/extractor/htmlLinks.js";
import { htmlMediaExtractor } from "@/extractor/htmlMediaExtractor.js";
import { htmlStructureData } from "@/extractor/htmlStructureData.js";
import { mobileUIUX } from "@/extractor/mobileUIUX.js";
import { urlAnalyses } from "@/extractor/urlAnalyses.js";
import { performanceSignal } from "@/extractor/performanceSignal.js";
import { htmlDocument } from "@/extractor/htmlDocument.js";
import { accessibilityInfo } from "@/extractor/accessibility.js";
import * as cheerio from "cheerio";

export type GatherInformationType = Omit<UrlCrawledType, "networkInfo" | "analyzedUrlData">;

export async function getGatherInformation(
  html: string,
  url: URL,
  crawlDepth: number,
): Promise<GatherInformationType> {
  const $ = cheerio.load(html);

  const htmlHeader = htmlHeaderExtractor($, url);
  const htmlHeadingContent = htmlContentsExtractor($);

  const links = htmlLinksExtractor($, url);
  const media = await htmlMediaExtractor($, new Set<string>(), url);
  const structureData = htmlStructureData($);
  const UIUX = mobileUIUX($);
  const url_Analyses = urlAnalyses(url, crawlDepth);
  const performance = performanceSignal($, url);
  const document = htmlDocument($, html);
  const accessibility = accessibilityInfo($);

  return {
    htmlHeader,
    htmlHeadingContent,
    links,
    media,
    structureData,
    mobileUIUX: UIUX,
    urlAnalyses: url_Analyses,
    performanceSignals: performance,
    htmlDocument: document,
    accessibility,
  };
}
