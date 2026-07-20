import * as cheerio from "cheerio";

export function getAmp($: cheerio.CheerioAPI, baseUrl: URL) {
  const href = $('link[rel="amphtml"]').attr("href");

  return {
    hasAmp: href !== undefined,
    ampUrl: href ? new URL(href, baseUrl).toString() : null,
  };
}
