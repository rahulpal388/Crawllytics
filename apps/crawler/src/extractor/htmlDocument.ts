import * as Cheerio from "cheerio";
import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes";
import { getJsFramework } from "@/utils/getJsFramework.js";

export function htmlDocument($: Cheerio.CheerioAPI, html: string): HTMLDocumentType {
  // --------------------- Basic ---------------------

  const htmlLang = $("html").attr("lang") ?? null;

  const charSet =
    $("meta[charset]").attr("charset") ??
    $('meta[http-equiv="content-type"]').attr("content") ??
    null;

  // --------------------- Size ---------------------

  const htmlSizeBytes = Buffer.byteLength(html, "utf8");

  const visibleText = $("body").text().replace(/\s+/g, " ").trim();

  const textLength = Buffer.byteLength(visibleText, "utf8");

  const textHtmlRatio =
    htmlSizeBytes === 0 ? 0 : Number(((textLength / htmlSizeBytes) * 100).toFixed(2));

  // --------------------- DOM ---------------------

  const domElementCount = $("*").length;

  const hasMainTag = $("main").length > 0;

  const hasNoscript = $("noscript").length > 0;

  const hasInlineStyles = $("[style]").length > 0;

  const inlineScriptCount = $("script:not([src])").length;

  // --------------------- iFrame ---------------------

  const iFrameCount = $("iframe").length;

  const iFrameSrc = $("iframe")
    .map((_, el) => $(el).attr("src"))
    .get()
    .filter((src): src is string => Boolean(src));

  // --------------------- Flash ---------------------

  const hasFlash =
    $('object[type="application/x-shockwave-flash"]').length > 0 ||
    $('embed[type="application/x-shockwave-flash"]').length > 0 ||
    html.includes("application/x-shockwave-flash");

  // --------------------- JavaScript ---------------------

  const jsFrameworks = getJsFramework($);

  // --------------------- Return ---------------------

  return {
    htmlLang,

    charSet,

    htmlSizeBytes,

    textHtmlRatio,

    domElementCount,

    hasMainTag,

    hasNoscript,

    hasInlineStyles,

    inlineScriptCount,

    iFrameCount,

    iFrameSrc,

    hasFlash,

    jsFrameworks,
  };
}
