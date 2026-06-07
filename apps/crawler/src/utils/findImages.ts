import { ImageType } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import * as Cheerio from "cheerio";

export function findImages($: Cheerio.CheerioAPI, preloadImages: Set<String>): ImageType[] {
    const images: ImageType[] = [];

    $("img").each((index, element) => {
        const src = $(element).attr("src") || "";
        const altText = $(element).attr("alt") || "";
        const altLength = altText.length;
        const hasAlt = altLength > 0;
        const widthDeclared = $(element).attr("width") !== undefined;
        const heightDeclared = $(element).attr("height") !== undefined;
        const loading = $(element).attr("loading") as 'lazy' | 'eager' | null || null;
        const fetchPriority = $(element).attr("fetchpriority") as 'high' | 'low' | 'auto' | null || null;
        const decoding = $(element).attr("decoding") as 'async' | 'sync' | 'auto' | null || null;
        const formatMatch = src.match(/\.(webp|avif|jpg|jpeg|png|gif|svg)(\?|$)/i);
        const format = formatMatch ? formatMatch[0].toLowerCase() : null;
        const isPreloaded = preloadImages.has(src.toLowerCase());

        images.push({
            src,
            altText,
            altLength,
            hasAlt,
            widthDeclared,
            heightDeclared,
            loading,
            fetchPriority,
            decoding,
            format,
            isPreloaded,
            fileSizeBytes: null
        })
    })



    return images;
}
