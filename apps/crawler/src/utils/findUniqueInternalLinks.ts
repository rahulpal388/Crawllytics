import { InternalLinkType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import * as cheerio from "cheerio";

export function findUniqueInternalLinks($: cheerio.CheerioAPI, baseUrl: URL): InternalLinkType[] {
  const internalLinks: InternalLinkType[] = [];
  const uniqueInternalLinks = new Set<string>();

  $("a").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;

    try {
      const newUrl = new URL(href, baseUrl);
      newUrl.hash = "";
      if (uniqueInternalLinks.has(newUrl.href)) {
        return;
      }
      uniqueInternalLinks.add(newUrl.href);
      if (newUrl.origin === baseUrl.origin) {
        const anchorText = $(el).text().trim();
        const isImage = $(el).find("img").length > 0;
        const altText = $(el).find("img").attr("alt") || null;
        const relAttributes = $(el).attr("rel") || "";
        const isDoFollow = !relAttributes.toLowerCase().includes("nofollow");

        internalLinks.push({
          url: newUrl.href,
          anchorText,
          isImage,
          altText,
          relAttributes,
          isDoFollow,
        });
      }
    } catch {
      console.warn(`Invalid URL found in href: ${href}`);
    }
  });

  return internalLinks;
}
