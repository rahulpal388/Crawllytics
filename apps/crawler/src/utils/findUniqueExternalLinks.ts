import { ExternalLinkType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import * as cheerio from "cheerio";

export function findUniqueExternalLinks($: cheerio.CheerioAPI, baseUrl: URL): ExternalLinkType[] {
    const externalLinks: ExternalLinkType[] = [];

    const uniqueExternalLinks = new Set<string>();

    $("a").each((_, el) => {
        const href = $(el).attr("href");
        if (!href) return;
        try {
            const newUrl = new URL(href, baseUrl);
            newUrl.hash = "";
            if (uniqueExternalLinks.has(newUrl.href)) {
                return;
            }
            uniqueExternalLinks.add(newUrl.href);

            if (newUrl.origin !== baseUrl.origin) {
                const anchorText = $(el).text().trim();
                const relAttributes = $(el).attr("rel") || "";
                const isImage = $(el).find("img").length > 0;
                const altText = $(el).find("img").attr("alt") || null;
                const isNoFollow = relAttributes.toLowerCase().includes("nofollow");
                const isSponsored = relAttributes.toLowerCase().includes("sponsored");
                const isUGC = relAttributes.toLowerCase().includes("ugc");
                const domain = newUrl.hostname;

                externalLinks.push({
                    url: newUrl.href,
                    anchorText,
                    relAttributes,
                    isImage,
                    altText,
                    isNoFollow,
                    isSponsored,
                    isUGC,
                    domain,
                });
            }
        } catch {
            console.warn(`Invalid URL found in href: ${href}`);
        }

    })

    return externalLinks;
}