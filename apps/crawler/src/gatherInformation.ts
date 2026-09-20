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




export async function getGatherInformation(
  html: string,
  url: URL,
  crawlDepth: number,
) {

  const $ = cheerio.load(html);
  const htmlHeader = htmlHeaderExtractor($, url);
  const htmlDocumentInfo = htmlDocument($);
  const htmlLinks = htmlLinksExtractor($, url);
  const htmlMedia = await htmlMediaExtractor($, url);
  const htmlStructure = htmlStructureData($);
  const urlAnalysis = urlAnalyses(url, crawlDepth);
  const performanceSignals = performanceSignal($, url);
  const accessibility = accessibilityInfo($);
  const mobileUIUX = getMobileHtmlData($, url);
  const htmlHeadingContent = htmlHeadingContentsExtractor($);

  const internalLinks = new Set(htmlLinks.internalLinks.map(link => {
    const normalizedUrl = new URL(link, url.origin);
    normalizedUrl.hash = '';
    return normalizedUrl.toString();
  }))

  return {
    htmlHeader,
    htmlDocument: htmlDocumentInfo,
    internalLinks,
    links: htmlLinks.links,
    media: htmlMedia,
    structureData: htmlStructure,
    urlAnalyses: urlAnalysis,
    performanceSignals: performanceSignals,
    accessibility: accessibility,
    mobileUIUX: mobileUIUX,
    htmlHeadingContent: htmlHeadingContent,

  }
}



