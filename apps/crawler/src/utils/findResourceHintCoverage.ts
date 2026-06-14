import { ResourceHintCoverage } from "@repo/config/types/urlInformationType/performanceSignalTypes";
import * as Cheerio from "cheerio";

export function findResourceHintCoverage(
    $: Cheerio.CheerioAPI,
    pageUrl: string
): ResourceHintCoverage {

    const preconnectCount =
        $('link[rel="preconnect"]').length;

    const preloadCount =
        $('link[rel="preload"]').length;

    const prefetchCount =
        $('link[rel="prefetch"]').length;

    const pageOrigin =
        new URL(pageUrl).origin;

    const hintedOrigins =
        new Set<string>();

    const thirdPartyOrigins =
        new Set<string>();

    // Collect preconnect and dns-prefetch origins
    $('link[rel="preconnect"], link[rel="dns-prefetch"]').each((_, el) => {

        const href = $(el).attr("href");

        if (!href) {
            return;
        }

        try {

            const normalizedHref =
                href.startsWith("//")
                    ? `https:${href}`
                    : href;

            const origin =
                new URL(normalizedHref, pageUrl).origin;

            hintedOrigins.add(origin);

        } catch { }
    });

    // Collect third-party origins
    $(
        'script[src], link[href], img[src], iframe[src], video[src], source[src]'
    ).each((_, el) => {

        const url =
            $(el).attr("src") ??
            $(el).attr("href");

        if (!url) {
            return;
        }

        try {

            const origin =
                new URL(url, pageUrl).origin;

            if (origin !== pageOrigin) {
                thirdPartyOrigins.add(origin);
            }

        } catch { }
    });

    const thirdPartyOriginsWithoutHint =
        [...thirdPartyOrigins]
            .filter(origin => !hintedOrigins.has(origin))
            .sort();

    return {
        preconnectCount,
        preloadCount,
        prefetchCount,
        thirdPartyOriginsWithoutHint
    };
}