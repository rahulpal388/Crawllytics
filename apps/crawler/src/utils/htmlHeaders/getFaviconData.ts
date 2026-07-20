import * as cheerio from "cheerio";
import { FaviconType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function getFaviconData($: cheerio.CheerioAPI, baseUrl: URL): FaviconType[] {
  const favicons: FaviconType[] = [];

  $("link[rel]").each((_, el) => {
    const rel = $(el).attr("rel")?.trim().toLowerCase();
    if (!rel || !rel.includes("icon")) {
      return;
    }
    const href = $(el).attr("href")?.trim();
    if (!href) {
      return;
    }

    favicons.push({
      href: new URL(href, baseUrl).href,
      type: $(el).attr("type")?.trim() ?? null,
      sizes: $(el).attr("sizes")?.trim() ?? null,
      rel,
    });
  });

  return favicons;
}
