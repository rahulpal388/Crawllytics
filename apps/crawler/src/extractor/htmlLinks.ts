import { findUniqueExternalLinks } from "@/utils/findUniqueExternalLinks.js";
import { findUniqueInternalLinks } from "@/utils/findUniqueInternalLinks.js";
import {
    HTMLLinksType,
} from "@repo/config/types/urlInformationType/htmlLinksTypes";

import * as cheerio from "cheerio";


export function htmlLinksExtractor(
    $: cheerio.CheerioAPI,
    baseUrl: URL
): HTMLLinksType {


    const internalLinks = findUniqueInternalLinks($, baseUrl);
    const externalLinks = findUniqueExternalLinks($, baseUrl);
    const totalLinksCount = internalLinks.length + externalLinks.length;
    const emptyAnchorTextCount = internalLinks.filter(link => link.anchorText === "").length + externalLinks.filter(link => link.anchorText === "").length;
    const imageAnchorCount = internalLinks.filter(link => link.isImage).length + externalLinks.filter(link => link.isImage).length;
    const nofollowInternalCount = internalLinks.filter(link => !link.isDoFollow).length;


    return {
        internalLinks,
        externalLinks,
        totalLinksCount,
        emptyAnchorTextCount,
        imageAnchorCount,
        nofollowInternalCount,
    }


}