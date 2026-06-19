import * as cheerio from "cheerio"
import { HTMLHeadingContentsType, HTMLHeadingType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";
import { getHeadingContent } from "@/utils/getHeadingContent.js";



export function htmlContentsExtractor($: cheerio.CheerioAPI): HTMLHeadingContentsType {

    const h1Contents: HTMLHeadingType[] = [];
    const h2Contents: HTMLHeadingType[] = [];
    const h3H6Contents: HTMLHeadingType[] = [];



    // ------------------- H1 heading ----------------
    $("h1").each((i, el) => {
        const text = $(el).text().trim();
        h1Contents.push(getHeadingContent(text));
    })


    // ------------------- H2 heading ----------------
    $("h2").each((i, el) => {
        const text = $(el).text().trim();
        h2Contents.push(getHeadingContent(text));
    })


    // ------------------- H3 to H6 heading ----------------
    $("h3").each((i, el) => {
        const text = $(el).text().trim();
        h3H6Contents.push(getHeadingContent(text));
    })
    $("h4").each((i, el) => {
        const text = $(el).text().trim();
        h3H6Contents.push(getHeadingContent(text));
    })
    $("h5").each((i, el) => {
        const text = $(el).text().trim();
        h3H6Contents.push(getHeadingContent(text));
    })
    $("h6").each((i, el) => {
        const text = $(el).text().trim();
        h3H6Contents.push(getHeadingContent(text));
    })



    // --------------------- words and body contents -----------------

    const bodyText = $("body").text().trim();
    const wordCount = bodyText.split(/\s+/).length;
    const paragraphCount = $("p").length;
    const sentenceCount = bodyText.split(/[.!?]+/).length;
    const avgSentenceLength = wordCount / sentenceCount;


    // ------------- some other information -------------------

    const detectedLanguage = $("html").attr("lang") || null;

    return {
        h1: h1Contents,
        h2: h2Contents,
        h3H6: h3H6Contents,

        count: {
            wordCount,
            paragraphCount,
            sentenceCount,
            avgSentenceLength,
        }
    }


}



