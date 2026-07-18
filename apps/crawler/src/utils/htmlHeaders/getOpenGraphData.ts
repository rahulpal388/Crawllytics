import { HTMLOpenGraphType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import * as cheerio from "cheerio";


/*
* Gather Open Graph Data from the HTML Document
*/
export function getOpenGraphData(
    $: cheerio.CheerioAPI
): HTMLOpenGraphType {

    const ogMap = new Map<string, string[]>();

    $('meta[property^="og:"]').each((_, el) => {

        const property = $(el).attr("property")?.trim();
        const content = $(el).attr("content")?.trim();

        if (!property || !content) return;

        if (!ogMap.has(property)) {
            ogMap.set(property, []);
        }

        ogMap.get(property)!.push(content);

    });

    return {

        title: ogMap.get("og:title")?.[0] ?? null,

        description: ogMap.get("og:description")?.[0] ?? null,

        image: ogMap.get("og:image") ?? [],

        audio: ogMap.get("og:audio") ?? [],

        video: ogMap.get("og:video") ?? [],

        imageWidth: ogMap.get("og:image:width")?.[0]
            ? Number(ogMap.get("og:image:width")![0])
            : null,

        imageHeight: ogMap.get("og:image:height")?.[0]
            ? Number(ogMap.get("og:image:height")![0])
            : null,

        imageAlt: ogMap.get("og:image:alt")?.[0] ?? null,

        imageType: ogMap.get("og:image:type")?.[0] ?? null,

        url: ogMap.get("og:url")?.[0] ?? null,

        type: ogMap.get("og:type")?.[0] ?? null,

        siteName: ogMap.get("og:site_name")?.[0] ?? null,

        locale: ogMap.get("og:locale")?.[0] ?? null,

    };
}