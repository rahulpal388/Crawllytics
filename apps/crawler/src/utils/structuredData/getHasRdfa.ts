import * as cheerio from "cheerio";

export function getHasRdfa($: cheerio.CheerioAPI): boolean {
  return $("[typeof], [property], [vocab], [resource]").length > 0;
}
