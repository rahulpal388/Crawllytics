import { faqCountFromJsonLd } from "@/utils/faqCountFromJsonLd.js";
import { getBreadcrumbsFromJsonLd } from "@/utils/getBreadCrumbsFromJsonLd.js";
import { jsonLdBlock } from "@/utils/jsonLdBlock.js";
import { HTMLStructureDataType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";
import { findRichResultEligibility } from "@repo/lib/findRichResultEligibility";
import * as cheerio from "cheerio";

export function htmlStructureData($: cheerio.CheerioAPI): HTMLStructureDataType {
  const jsonLdBlocks = jsonLdBlock($);
  const schemaTypes = jsonLdBlocks
    .map((block) => block.schemaType)
    .filter((type): type is string => type !== null);

  const hasMicroData = $("[itemscope]").length > 0;

  const hasRdfa =
    $("[typeof]").length > 0 ||
    $("[vocab]").length > 0 ||
    $("[property]").not('meta[property^="og:"]').length > 0;

  const breadcrumbs = getBreadcrumbsFromJsonLd(jsonLdBlocks);
  const faqCount = faqCountFromJsonLd(jsonLdBlocks);

  const richResultEligible = findRichResultEligibility(schemaTypes);

  return {
    JsonLdBlocks: jsonLdBlocks,
    schemaTypes,
    hasMicroData,
    hasRdfa,
    richResultEligible,
    breadcrumbs,
    faqCount,
  };
}
