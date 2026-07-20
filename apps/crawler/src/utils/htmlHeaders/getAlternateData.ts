import * as cheerio from "cheerio";
import { HTMLAlternateType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function getAlternateData($: cheerio.CheerioAPI, baseUrl: URL): HTMLAlternateType[] {
  const alternates: HTMLAlternateType[] = [];

  $('link[rel="alternate"]').each((_, element) => {
    const href = $(element).attr("href");

    if (!href) {
      return;
    }

    alternates.push({
      href: new URL(href, baseUrl).href,
      hreflang: $(element).attr("hreflang") ?? null,
      type: $(element).attr("type") ?? null,
      media: $(element).attr("media") ?? null,
      title: $(element).attr("title") ?? null,
      as: $(element).attr("as") ?? null,
      crossOrigin: $(element).attr("crossorigin") ?? null,
    });
  });

  return alternates;
}
