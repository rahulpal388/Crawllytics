import { JsonLdBlock } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

export function faqCountFromJsonLd(jsonLdBlocks: JsonLdBlock[]): number {
  return jsonLdBlocks.reduce((count, block) => {
    if (block.schemaType === "FAQPage" && block.isValid) {
      try {
        const parsed = JSON.parse(block.rawJson);
        return count + (parsed.mainEntity?.length || 0);
      } catch {
        return count;
      }
    }
    return count;
  }, 0);
}
