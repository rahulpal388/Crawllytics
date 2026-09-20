import * as cheerio from "cheerio";

export function getMobileWebAppMeta($: cheerio.CheerioAPI) {
  return {
    appleMobileWebAppCapable:
      $('meta[name="apple-mobile-web-app-capable"]').attr("content")?.toLowerCase() === "yes",

    mobileWebAppCapable:
      $('meta[name="mobile-web-app-capable"]').attr("content")?.toLowerCase() === "yes",

    appleStatusBarStyle:
      $('meta[name="apple-mobile-web-app-status-bar-style"]').attr("content") ?? null,
  };
}
