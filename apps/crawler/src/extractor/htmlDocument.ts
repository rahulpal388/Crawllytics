import * as Cheerio from "cheerio";
import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes";
import { getDocumentData } from "@/utils/htmlDocument/getDocumentData.js";

export function htmlDocument($: Cheerio.CheerioAPI, html: string): HTMLDocumentType {
  return getDocumentData($);
}
