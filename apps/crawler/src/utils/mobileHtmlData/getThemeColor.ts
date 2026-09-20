import * as cheerio from "cheerio";

export function getThemeColor($: cheerio.CheerioAPI) {
  const themeColor = $('meta[name="theme-color"]').attr("content") ?? null;

  return {
    hasThemeColor: themeColor !== null,
    themeColor,
  };
}
