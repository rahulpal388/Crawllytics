import * as cheerio from "cheerio";

export function getAlternateMobileUrl($: cheerio.CheerioAPI, baseUrl: URL): string | null {
  const href = $('link[rel="alternate"][media]')
    .filter((_, el) => ($(el).attr("media") ?? "").toLowerCase().includes("max-width"))
    .first()
    .attr("href");

  return href ? new URL(href, baseUrl).toString() : null;
}
