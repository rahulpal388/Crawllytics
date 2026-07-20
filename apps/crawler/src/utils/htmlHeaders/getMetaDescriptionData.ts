import * as cheerio from "cheerio";
import { HTMLMetaDescriptionType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function getMetaDescriptionData($: cheerio.CheerioAPI): HTMLMetaDescriptionType[] {
  const metaDescription: HTMLMetaDescriptionType[] = [];
  const meta = $(`meta[name="description"]`);
  meta.each((i, el) => {
    const text = $(el).attr("content") || "";
    const lengthChar = text.length;
    const lengthPixel = lengthChar * 10;
    metaDescription.push({
      text,
      lengthChar,
      lengthPixel,
    });
  });

  return metaDescription;
}
