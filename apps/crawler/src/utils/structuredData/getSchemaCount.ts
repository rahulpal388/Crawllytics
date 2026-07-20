import { JsonLdBlockType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

export function getSchemaCounts(jsonLdBlocks: JsonLdBlockType[]) {
  let productCount = 0;
  let reviewCount = 0;
  let videoCount = 0;
  let eventCount = 0;
  let localBusinessCount = 0;
  let personCount = 0;

  for (const block of jsonLdBlocks) {
    if (!block.parsedJson) continue;

    const objects = Array.isArray(block.parsedJson) ? block.parsedJson : [block.parsedJson];

    for (const obj of objects) {
      const types = Array.isArray(obj["@type"]) ? obj["@type"] : [obj["@type"]];

      for (const type of types) {
        switch (type) {
          case "Product":
            productCount++;
            break;

          case "Review":
            reviewCount++;
            break;

          case "VideoObject":
            videoCount++;
            break;

          case "Event":
            eventCount++;
            break;

          case "LocalBusiness":
            localBusinessCount++;
            break;

          case "Person":
            personCount++;
            break;
        }
      }
    }
  }

  return {
    productCount,
    reviewCount,
    videoCount,
    eventCount,
    localBusinessCount,
    personCount,
  };
}
