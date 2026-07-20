import { JsonLdBlockType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

export function getWebsiteData(jsonLdBlocks: JsonLdBlockType[]) {
  let websiteName: string | null = null;

  for (const block of jsonLdBlocks) {
    if (!block.parsedJson) continue;

    const objects = Array.isArray(block.parsedJson) ? block.parsedJson : [block.parsedJson];

    for (const obj of objects) {
      if (obj["@type"] !== "WebSite") continue;

      if (typeof obj["name"] === "string") {
        websiteName = obj["name"];
      }

      return { websiteName };
    }
  }

  return { websiteName };
}
