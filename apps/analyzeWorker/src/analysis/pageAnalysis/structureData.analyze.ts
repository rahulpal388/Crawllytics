import { GatherInfoType } from "@/types/gatherInfoType.js";
import { StructuredDataAnalysis } from "@repo/config/types/analysesTypes/perPages/pageStrucutre";

export function structureDataAnalysis(
  data: GatherInfoType["structureData"],
): StructuredDataAnalysis {
  const hasJsonLd = data.JsonLdBlocks.length > 0;
  const hasMicrodata = data.hasMicroData;
  const hasRdfa = data.hasRdfa;
  const schemaTypes = data.schemaTypes;
  const totalSchemas = data.schemaTypes.length;
  const validSchemas = data.JsonLdBlocks.map((block) => block.isValid).filter(
    (isValid) => isValid,
  ).length;
  const invalidSchemas = totalSchemas - validSchemas;

  const richResultEligible = data.richResultEligible;
  const hasBreadcrumbSchema = data.breadcrumbs.length > 0;
  const hasFaqSchema = data.faqCount > 0;
  return {
    hasStructuredData: hasJsonLd || hasMicrodata || hasRdfa,
    hasJsonLd,
    hasMicroData: hasMicrodata,
    hasRdfa,
    schemaTypes,
    totalSchemas,
    validSchemas,
    invalidSchemas,
    richResultEligible: richResultEligible.length > 0,
    hasBreadcrumbSchema,
    hasFaqSchema,
  };
}
