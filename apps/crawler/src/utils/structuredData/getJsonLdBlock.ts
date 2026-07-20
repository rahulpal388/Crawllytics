import { JsonLdBlockType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";
import * as cheerio from "cheerio";

export function getJsonLdBlocks($: cheerio.CheerioAPI): JsonLdBlockType[] {
  const blocks: JsonLdBlockType[] = [];

  $('script[type="application/ld+json"]').each((_, element) => {
    const rawJson = $(element).html()?.trim() ?? "";

    let parsedJson: Record<string, unknown> | Record<string, unknown>[] | null = null;
    let schemaType: string | string[] | null = null;
    let context: string | null = null;
    let id: string | null = null;
    let isParsable = true;
    const parseErrors: string[] = [];

    try {
      parsedJson = JSON.parse(rawJson);

      if (parsedJson && !Array.isArray(parsedJson)) {
        context = typeof parsedJson["@context"] === "string" ? parsedJson["@context"] : null;

        id = typeof parsedJson["@id"] === "string" ? parsedJson["@id"] : null;

        const type = parsedJson["@type"];

        if (typeof type === "string" || Array.isArray(type)) {
          schemaType = type;
        }
      }
    } catch (error) {
      isParsable = false;
      parseErrors.push(error instanceof Error ? error.message : "Unknown JSON parse error");
    }

    blocks.push({
      rawJson,
      parsedJson,
      schemaType,
      context,
      id,
      isParsable,
      parseErrors,
    });
  });

  return blocks;
}
