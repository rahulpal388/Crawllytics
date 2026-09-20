import * as cheerio from "cheerio";

export function getManifest($: cheerio.CheerioAPI, baseUrl: URL) {
  const href = $('link[rel="manifest"]').attr("href");

  return {
    hasManifest: href !== undefined,
    manifestUrl: href ? new URL(href, baseUrl).toString() : null,
  };
}
