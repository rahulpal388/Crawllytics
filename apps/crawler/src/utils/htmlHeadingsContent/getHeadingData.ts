import * as cheerio from "cheerio";
import { HTMLHeadingType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";

export function getHeadingData($: cheerio.CheerioAPI): HTMLHeadingType[] {
  const headings: HTMLHeadingType[] = [];

  $("h1,h2,h3,h4,h5,h6").each((position, element) => {
    const level = Number(element.tagName[1]) as 1 | 2 | 3 | 4 | 5 | 6;

    const text = $(element).text().trim();

    headings.push({
      level,
      text,
      characterCount: text.length,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      id: $(element).attr("id") ?? null,
      position,
      hasAnchor: $(element).find("a").length > 0,
    });
  });

  return headings;
}
