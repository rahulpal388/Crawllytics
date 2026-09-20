import * as cheerio from "cheerio";

export function getHasMicrodata($: cheerio.CheerioAPI): boolean {
  return $("[itemscope], [itemtype], [itemprop]").length > 0;
}
