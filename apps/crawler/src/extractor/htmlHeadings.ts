import { tempHtml } from "@/extractor/tempHtml.js";
import { HTMLHeadingsType } from "@/types/htmlHeadingTypes.js";
import * as cherrio from "cheerio"



export function htmlHeadingExtractor(html: string): HTMLHeadingsType {

    const h1Contents: string[] = [];
    const h2Contents: string[] = [];
    const h3H6Contents: string[] = [];

    const $ = cherrio.load(html);

    const h1 = $("h1");
    $("h1").each((i, el) => {
        const text = $(el).text().trim();
        h1Contents.push(text);
    })
    $("h2").each((i, el) => {
        const text = $(el).text().trim();
        h2Contents.push(text);
    })
    $("h3").each((i, el) => {
        const text = $(el).text().trim();
        h3H6Contents.push(text);
    })
    $("h4").each((i, el) => {
        const text = $(el).text().trim();
        h3H6Contents.push(text);
    })
    $("h5").each((i, el) => {
        const text = $(el).text().trim();
        h3H6Contents.push(text);
    })
    $("h6").each((i, el) => {
        const text = $(el).text().trim();
        h3H6Contents.push(text);
    })


    return {
        h1: {
            count: h1Contents.length,
            texts: h1Contents
        },
        h2: {
            count: h2Contents.length,
            texts: h2Contents
        },
        h3H6: {
            count: h3H6Contents.length,
            texts: h3H6Contents
        }
    }


}