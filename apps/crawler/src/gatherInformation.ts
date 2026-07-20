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
): Promise<GatherInformationType & { uniqueInternalLinks: string[] }> {
  const $ = cheerio.load(html);

  const htmlHeader = htmlHeaderExtractor($, url);
  const htmlHeadingContent = htmlHeadingContentsExtractor($);

  const linksData = htmlLinksExtractor($, url);
  const internalLinks = linksData.links.filter((link) => link.isInternal);
  const uniqueInternalLinks = Array.from(new Set(linksData.internalLinks));
  const media = await htmlMediaExtractor($, url);
  const structureData = htmlStructureData($);
  const UIUX = getMobileHtmlData($, url);
  const url_Analyses = urlAnalyses(url, crawlDepth);
  const performance = performanceSignal($, url);
  const document = htmlDocument($, html);
  const accessibility = accessibilityInfo($);

  return {
    htmlHeader,
    htmlHeadingContent,
    links: internalLinks,
    uniqueInternalLinks,
    media,
    structureData,
    mobileUIUX: UIUX,
    urlAnalyses: url_Analyses,
    performanceSignals: performance,
    htmlDocument: document,
    accessibility,
  };
}
