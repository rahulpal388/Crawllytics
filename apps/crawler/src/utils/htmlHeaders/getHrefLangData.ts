import * as cheerio from "cheerio";
import { HreflangType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { isAbsoluteUrl } from "@/utils/isAbsoluteUrl.js";

/*
 * Href-Lang Data from the HTML Document
 */

const LANGUAGE_REGEX = /^[a-z]{2,3}(-[A-Z]{2})?$/;

export function getHrefLangData($: cheerio.CheerioAPI, baseUrl: URL): HreflangType[] {
  const hreflangs: HreflangType[] = [];

  $('link[rel="alternate"][hreflang]').each((_, el) => {
    const hreflang = $(el).attr("hreflang")?.trim() ?? "";

    const href = $(el).attr("href")?.trim() ?? "";

    let language: string | null = null;
    let region: string | null = null;

    const isDefault = hreflang.toLowerCase() === "x-default";

    if (!isDefault) {
      const parts = hreflang.split("-");

      language = parts[0] ?? null;

      region = parts[1] ?? null;
    }

    hreflangs.push({
      hreflang,
      language,
      region,
      href,
      hrefStatusCode: null,
      isReturn: false,
      isDefault,
      isValidLanguage: isDefault || LANGUAGE_REGEX.test(hreflang),
      isAbsoluteUrl: isAbsoluteUrl(href),
    });
  });

  return hreflangs;
}
