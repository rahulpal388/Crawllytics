import * as cheerio from "cheerio";

export function getFormatDetection($: cheerio.CheerioAPI) {
  return $('meta[name="format-detection"]').attr("content") ?? null;
}
