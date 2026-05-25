import {
    ExternalLinkType,
    HTMLLinksType,
    InternalLinkType,
} from "@repo/config/types/urlInformationType/htmlLinksTypes";

import * as cheerio from "cheerio";

export function htmlLinksExtractor(
    html: string,
    baseUrl: URL
): HTMLLinksType {

    const $ = cheerio.load(html);

    const internalLinks: InternalLinkType[] = [];
    const externalLinks: ExternalLinkType[] = [];

    // Track unique URLs
    const internalSeen = new Set<string>();
    const externalSeen = new Set<string>();

    $("a").each((i, el) => {

        const href = $(el).attr("href") || "";
        const anchorText = $(el).text().trim();

        try {

            const newUrl = new URL(href, baseUrl);

            const allowedProtocols = ["http:", "https:"];

            if (!allowedProtocols.includes(newUrl.protocol)) {
                return;
            }

            newUrl.hash = "";

            let normalizedUrl = newUrl.href;

            if (normalizedUrl.endsWith("/")) {
                normalizedUrl = normalizedUrl.slice(0, -1);
            }

            if (newUrl.origin === baseUrl.origin) {

                if (!internalSeen.has(normalizedUrl)) {

                    internalSeen.add(normalizedUrl);

                    internalLinks.push({
                        url: normalizedUrl,
                        anchorText,
                    });

                }

            }

            else {

                if (!externalSeen.has(normalizedUrl)) {

                    externalSeen.add(normalizedUrl);

                    externalLinks.push({
                        url: normalizedUrl,
                        anchorText,
                        relAttributes: $(el).attr("rel") || "",
                    });

                }

            }

        } catch (error) {

            console.warn(
                `Invalid URL found: ${href} - Skipping this link.`
            );

        }

    });

    return {
        internalLinks,
        externalLinks,
    };

}