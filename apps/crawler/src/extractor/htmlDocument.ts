import * as Cheerio from "cheerio"
import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes"
import { getJsFramework } from "@/utils/getJsFramework.js";

export function htmlDocument($: Cheerio.CheerioAPI, html: string): HTMLDocumentType {

    const htmlLang = $("html").attr("lang") ?? null;
    const charSet =
        $('meta[charset]').attr('charset') ??
        $('meta[http-equiv="content-type"]').attr('content') ??
        null;

    const htmlSizeBytes = Buffer.byteLength(html, "utf8");

    const visibleText = $("body").text().replace(/\s+/g, " ").trim();
    const textLength = Buffer.byteLength(visibleText, "utf8");
    const textHtmlRatio = htmlSizeBytes > 0 ? (textLength / htmlSizeBytes) * 100 : 0;
    const iFrameCount = $("iframe").length;

    const iFrameSrc = $("iframe")
        .map((_, el) => $(el).attr("src"))
        .get()
        .filter((src): src is string => Boolean(src));
    const hasFlash =
        $('object[type="application/x-shockwave-flash"]').length > 0 ||
        $('embed[type="application/x-shockwave-flash"]').length > 0 ||
        html.includes("application/x-shockwave-flash");

    const jsFrameworks = getJsFramework($);


    return {
        htmlLang,
        charSet,
        htmlSizeBytes,
        textHtmlRatio,
        iFrameCount,
        iFrameSrc,
        hasFlash,
        jsFrameworks
    }

}


