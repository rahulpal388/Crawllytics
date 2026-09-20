import * as cheerio from "cheerio";

export function getViewport($: cheerio.CheerioAPI) {
  const viewport = $('meta[name="viewport"]').first();

  return {
    hasMetaViewport: viewport.length > 0,
    viewportContent: viewport.attr("content") ?? null,
  };
}
