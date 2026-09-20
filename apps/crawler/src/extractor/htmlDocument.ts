import * as Cheerio from "cheerio";
import { HTMLDocumentType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlDocumentTypes";
import { getDocumentData } from "@/utils/htmlDocument/getDocumentData.js";

export function htmlDocument($: Cheerio.CheerioAPI): HTMLDocumentType {
  return getDocumentData($);
}
