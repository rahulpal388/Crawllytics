import * as cheerio from "cheerio";

export function getAppleTouchIcons($: cheerio.CheerioAPI, baseUrl: URL) {
  const appleTouchIcons = $('link[rel~="apple-touch-icon"]')
    .map((_, el) => {
      const href = $(el).attr("href");

      if (!href) return null;

      try {
        return new URL(href, baseUrl).toString();
      } catch {
        return null;
      }
    })
    .get()
    .filter((url): url is string => url !== null);

  return {
    hasAppleTouchIcon: appleTouchIcons.length > 0,
    appleTouchIcons,
  };
}
