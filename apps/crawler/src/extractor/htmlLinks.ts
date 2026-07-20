import { getLinkData } from "@/utils/links/getLinkData.js";
import { HTMLLinksType } from "@repo/config/types/urlInformationType/htmlLinksTypes";

import * as cheerio from "cheerio";

export function htmlLinksExtractor(
  $: cheerio.CheerioAPI,
  baseUrl: URL,
): HTMLLinksType & { internalLinks: string[] } {
  const links = getLinkData($, baseUrl);
  const internalLinks = links
    .filter((link) => link.linkType === "internal")
    .map((link) => link.absoluteUrl);

  return {
    links,
    internalLinks,
  };
}
