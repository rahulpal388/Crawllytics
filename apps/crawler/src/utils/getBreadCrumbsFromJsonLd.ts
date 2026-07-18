import {
  BreadcrumbItem,
  JsonLdBlock,
} from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

export function getBreadcrumbsFromJsonLd(jsonLdBlocks: JsonLdBlock[]): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];

  jsonLdBlocks.forEach((block) => {
    if (block.schemaType === "BreadcrumbList" && block.isValid) {
      try {
        const itemsListElement = JSON.parse(block.rawJson).itemListElement;
        itemsListElement.forEach((item: any) => {
          breadcrumbs.push({
            url: item.item || "",
            name: item.name || "",
            position: item.position || 0,
          });
        });
      } catch (error) {
        return [];
      }
    }
  });

  return breadcrumbs;
}
