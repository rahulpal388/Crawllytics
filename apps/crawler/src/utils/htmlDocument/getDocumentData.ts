import { detectFrameworks } from "@/utils/htmlDocument/detectFramework.js";
import * as cheerio from "cheerio";
import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes";

export function getDocumentData($: cheerio.CheerioAPI): HTMLDocumentType {
  const html = $.html() || "";
  const htmlLang = $("html").attr("lang")?.trim() || null;

  const charSet =
    $("meta[charset]").attr("charset") ??
    $('meta[http-equiv="Content-Type"]')
      .attr("content")
      ?.match(/charset=([^;]+)/i)?.[1] ??
    null;

  const htmlSizeBytes = Buffer.byteLength(html, "utf8");

  const domElementCount = $("*").length;

  const hasMainTag = $("main").length > 0;

  const hasNoscript = $("noscript").length > 0;

  const hasInlineStyles = $("[style]").length > 0;

  const inlineScriptCount = $("script:not([src])").length;

  const iFrames = $("iframe");

  const iFrameSrc = iFrames
    .map((_, el) => $(el).attr("src"))
    .get()
    .filter(Boolean) as string[];

  const hasFlash =
    $("embed[src$='.swf'], object, embed[type='application/x-shockwave-flash']").length > 0;

  const jsFrameworks = detectFrameworks($);

  return {
    htmlLang,
    charSet,
    htmlSizeBytes,

    // Analysis layer
    textHtmlRatio: 0,

    domElementCount,

    hasMainTag,

    hasNoscript,

    hasInlineStyles,

    inlineScriptCount,

    iFrameCount: iFrames.length,

    iFrameSrc,

    hasFlash,

    jsFrameworks,
  };
}
