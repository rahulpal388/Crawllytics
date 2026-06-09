import { JsonLdBlock } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

import * as Cheerio from "cheerio";


export function jsonLdBlock($: Cheerio.CheerioAPI): JsonLdBlock[] {
    const jsonLdBlocks: JsonLdBlock[] = [];

    $('script[type="application/ld+json"]').each((_, el) => {
        const rawJson = $(el).html()?.trim() ?? "";

        try {
            const parsed = JSON.parse(rawJson);

            jsonLdBlocks.push({
                rawJson,
                schemaType: parsed["@type"] ?? null,
                isValid: true,
                errors: [],
                warnings: []
            });
        } catch {
            jsonLdBlocks.push({
                rawJson,
                schemaType: null,
                isValid: false,
                errors: ["Invalid JSON-LD"],
                warnings: []
            });
        }
    });

    return jsonLdBlocks;
}
