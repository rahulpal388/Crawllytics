import * as cheerio from "cheerio";
import { HTMLTitleType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function getTitleData($: cheerio.CheerioAPI): HTMLTitleType[] {
  const titleValue: HTMLTitleType[] = [];
  $("title").each((i, el) => {
    const text = $(el).text();
    const lengthChar = text.length;
    const lengthPixel = lengthChar * 10;
    const wordCount = text.trim().split(/\s+/).length;
    titleValue.push({
      text,
      lengthChar,
      lengthPixel,
    });
  });

  return titleValue;
}
