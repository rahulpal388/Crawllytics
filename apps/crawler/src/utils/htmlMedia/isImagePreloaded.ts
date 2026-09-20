import * as cheerio from "cheerio";

export function isImagePreloaded(
  $: cheerio.CheerioAPI,
  absoluteUrl: string,
  baseUrl: URL,
): boolean {
  const isPreloaded = $('link[rel="preload"][as="image"]')
    .toArray()
    .some((link) => {
      const href = $(link).attr("href");
      if (!href) return false;

      try {
        return new URL(href, baseUrl).href === absoluteUrl;
      } catch {
        return false;
      }
    });

  return isPreloaded;
}
