import { JsonLdBlockType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

export function getFaqCount(jsonLdBlocks: JsonLdBlockType[]): number {
  let count = 0;

  for (const block of jsonLdBlocks) {
    if (!block.parsedJson) continue;

    const objects = Array.isArray(block.parsedJson) ? block.parsedJson : [block.parsedJson];

    for (const obj of objects) {
      if (obj["@type"] !== "FAQPage") continue;

      const entities = obj["mainEntity"];

      if (Array.isArray(entities)) {
        count += entities.length;
      }
    }
  }

  return count;
}
