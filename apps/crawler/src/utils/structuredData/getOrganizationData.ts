import { JsonLdBlockType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

export function getOrganization(jsonLdBlocks: JsonLdBlockType[]) {
  let organizationName: string | null = null;
  let organizationLogo: string | null = null;

  for (const block of jsonLdBlocks) {
    if (!block.parsedJson) continue;

    const objects = Array.isArray(block.parsedJson) ? block.parsedJson : [block.parsedJson];

    for (const obj of objects) {
      if (obj["@type"] !== "Organization") continue;

      if (typeof obj["name"] === "string") {
        organizationName = obj["name"];
      }

      const logo = obj["logo"];

      if (typeof logo === "string") {
        organizationLogo = logo;
      } else if (
        typeof logo === "object" &&
        logo !== null &&
        typeof (logo as Record<string, unknown>)["url"] === "string"
      ) {
        organizationLogo = (logo as Record<string, unknown>)["url"] as string;
      }

      return {
        organizationName,
        organizationLogo,
      };
    }
  }

  return {
    organizationName,
    organizationLogo,
  };
}
