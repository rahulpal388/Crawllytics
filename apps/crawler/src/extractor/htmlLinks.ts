import { ExternalLinkType, HTMLLinksType, InternalLinkType } from "@/types/htmlLinksTypes.js";
import * as cherrio from "cheerio";

export function htmlLinksExtractor(html: string, baseUrl: URL): HTMLLinksType {


    const $ = cherrio.load(html);
    const internalLinks: InternalLinkType[] = [];
    const externalLinks: ExternalLinkType[] = [];
    const links: string[] = [];


    $("a").each((i, el) => {
        const href = $(el).attr("href") || "";
        const anchorText = $(el).text().trim();
    })






    return {
        internalLinks,
        externalLinks
    }

}