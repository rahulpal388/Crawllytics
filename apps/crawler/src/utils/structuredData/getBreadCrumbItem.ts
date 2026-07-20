import {
  BreadcrumbItemType,
  JsonLdBlockType,
} from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

export function getBreadcrumbs(jsonLdBlocks: JsonLdBlockType[]): BreadcrumbItemType[] {
  const breadcrumbs: BreadcrumbItemType[] = [];

  for (const block of jsonLdBlocks) {
    if (!block.isParsable || !block.parsedJson) {
      continue;
    }

    const objects = Array.isArray(block.parsedJson) ? block.parsedJson : [block.parsedJson];

    for (const obj of objects) {
      extractBreadcrumbs(obj, breadcrumbs);
    }
  }

  return breadcrumbs.sort((a, b) => a.position - b.position);
}

function extractBreadcrumbs(obj: Record<string, unknown>, breadcrumbs: BreadcrumbItemType[]): void {
  if (obj["@type"] !== "BreadcrumbList") {
    return;
  }

  const itemList = obj["itemListElement"];

  if (!Array.isArray(itemList)) {
    return;
  }

  for (const item of itemList) {
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      continue;
    }

    const position = typeof item.position === "number" ? item.position : 0;

    const name =
      typeof item.name === "string"
        ? item.name
        : typeof (item.item as Record<string, unknown> | undefined)?.name === "string"
          ? ((item.item as Record<string, unknown>).name as string)
          : "";

    const url =
      typeof item.item === "string"
        ? item.item
        : typeof (item.item as Record<string, unknown> | undefined)?.["@id"] === "string"
          ? ((item.item as Record<string, unknown>)["@id"] as string)
          : "";

    breadcrumbs.push({
      position,
      name,
      url,
    });
  }
}
