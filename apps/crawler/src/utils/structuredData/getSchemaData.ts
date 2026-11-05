import { JsonLdBlockType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/htmlStructureDataTypes";

export function getSchemaTypes(jsonLdBlocks: JsonLdBlockType[]): string[] {
  const schemaTypes = new Set<string>();

  for (const block of jsonLdBlocks) {
    if (!block.parsedJson) continue;

    const objects = Array.isArray(block.parsedJson) ? block.parsedJson : [block.parsedJson];

    for (const obj of objects) {
      const type = obj["@type"];

      if (typeof type === "string") {
        schemaTypes.add(type);
      } else if (Array.isArray(type)) {
        for (const t of type) {
          if (typeof t === "string") {
            schemaTypes.add(t);
          }
        }
      }
    }
  }

  return [...schemaTypes];
}
