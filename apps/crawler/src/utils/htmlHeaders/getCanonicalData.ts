import { HTMLCanonicalType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import * as cheerio from "cheerio";
import { isAbsoluteUrl } from "@/utils/isAbsoluteUrl.js";


/*
* Gather Canonical Data from the HTML Document
*/

export function getCanonicalData($: cheerio.CheerioAPI, baseUrl: URL): HTMLCanonicalType[] {
    const canonical: HTMLCanonicalType[] = [];

    $(`link[rel="canonical"]`).each((_, el) => {
        const canonicalUrl = $(el).attr("href")?.trim() ?? "";

        let isSelf = false;
        let isCrossPage = false;
        let isCrossDomain = false;
        let isRelativeUrl = false;
        let isHttps = false;
        let isValidUrl = false;

        let resolvedUrl = "";

        try {
            const canonical = new URL(canonicalUrl, baseUrl);

            resolvedUrl = canonical.href;

            isRelativeUrl = !isAbsoluteUrl(canonicalUrl);

            isHttps = canonical.protocol === "https:";

            isCrossDomain = canonical.hostname !== baseUrl.hostname;

            isSelf = canonical.origin === baseUrl.origin && canonical.pathname === baseUrl.pathname;

            isCrossPage = !isCrossDomain && canonical.pathname !== baseUrl.pathname;

            isValidUrl = true;
        } catch {
            isValidUrl = false;
        }

        canonical.push({
            url: canonicalUrl,
            isSelf,
            isCrossPage,
            isCrossDomain,
            isAbsoluteUrl: isAbsoluteUrl(canonicalUrl),
            isRelativeUrl,
            isHttps,
            isValidUrl,
        });
    });

    return canonical;
}
