import * as cheerio from "cheerio";
import { HTMLTitleType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlHeaderResponseTypes";

export function getTitleData($: cheerio.CheerioAPI): HTMLTitleType[] {
  const titleValue: HTMLTitleType[] = [];
  $("title").each((i, el) => {
    const text = $(el).text();
    const lengthChar = text.length;
    const lengthPixel = lengthChar * 10;
    titleValue.push({
      text,
      lengthChar,
      lengthPixel,
    });
  });

  return titleValue;
}
