import { tempHtml } from "@/extractor/tempHtml.js";
import { faqCountFromJsonLd } from "@/utils/faqCountFromJsonLd.js";
import { getBreadcrumbsFromJsonLd } from "@/utils/getBreadCrumbsFromJsonLd.js";
import { jsonLdBlock } from "@/utils/jsonLdBlock.js";
import { HTMLStructureDataType, BreadcrumbItem, JsonLdBlock } from "@repo/config/types/urlInformationType/htmlStructureDataTypes"
import * as cheerio from "cheerio";

export function htmlStructureData($: cheerio.CheerioAPI): HTMLStructureDataType {

    const jsonLdBlocks = jsonLdBlock($);
    const schemaTypes = jsonLdBlocks.map(block => block.schemaType).filter((type): type is string => type !== null);

    const hasMicroData = $('[itemscope]').length > 0;

    const hasRdfa =
        $('[typeof]').length > 0 ||
        $('[vocab]').length > 0 ||
        $('[property]')
            .not('meta[property^="og:"]')
            .length > 0;

    const breadcrumbs = getBreadcrumbsFromJsonLd(jsonLdBlocks);
    const faqCount = faqCountFromJsonLd(jsonLdBlocks);


    return {
        JsonLdBlocks: jsonLdBlocks,
        schemaTypes,
        hasMicroData,
        hasRdfa,
        richResultEligible: [],
        breadcrumbs,
        faqCount
    }
}



// function jsonLdBlock($: cherrio.CheerioAPI): JsonLdBlock[] {
//     const jsonLdBlocks: JsonLdBlock[] = [];

//     $('script[type="application/ld+json"]').each((_, el) => {
//         const rawJson = $(el).html()?.trim() ?? "";

//         try {
//             const parsed = JSON.parse(rawJson);

//             jsonLdBlocks.push({
//                 rawJson,
//                 schemaType: parsed["@type"] ?? null,
//                 isValid: true,
//                 errors: [],
//                 warnings: []
//             });
//         } catch {
//             jsonLdBlocks.push({
//                 rawJson,
//                 schemaType: null,
//                 isValid: false,
//                 errors: ["Invalid JSON-LD"],
//                 warnings: []
//             });
//         }
//     });

//     return jsonLdBlocks;
// }


// function getBreadcrumbsFromJsonLd(jsonLdBlocks: JsonLdBlock[]): BreadcrumbItem[] {
//     const breadcrumbs: BreadcrumbItem[] = [];

//     jsonLdBlocks.forEach(block => {
//         if (block.schemaType === "BreadcrumbList" && block.isValid) {
//             try {
//                 const itemsListElement = JSON.parse(block.rawJson).itemListElement;
//                 itemsListElement.forEach((item: any) => {
//                     breadcrumbs.push({
//                         url: item.item || "",
//                         name: item.name || "",
//                         position: item.position || 0
//                     })
//                 })



//             } catch (error) {
//                 return []
//             }
//         }
//     })

//     return breadcrumbs;


// }

// function faqCountFromJsonLd(jsonLdBlocks: JsonLdBlock[]): number {
//     return jsonLdBlocks.reduce((count, block) => {
//         if (block.schemaType === "FAQPage" && block.isValid) {
//             try {
//                 const parsed = JSON.parse(block.rawJson);
//                 return count + (parsed.mainEntity?.length || 0);
//             } catch {
//                 return count;
//             }
//         }
//         return count;
//     }, 0);
// }