import { getLinkType } from "@/utils/links/getLinkType.js";
import { HTMLLinkType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import * as cheerio from "cheerio";

export function getLinkData($: cheerio.CheerioAPI, baseUrl: URL): HTMLLinkType[] {
  const links: HTMLLinkType[] = [];

  $("a").each((position, element) => {
    const anchor = $(element);

    const href = anchor.attr("href");

    if (!href) return;

    let absoluteUrl: URL | null = null;

    try {
      absoluteUrl = new URL(href, baseUrl);
    } catch {
      return;
    }

    const rel = (anchor.attr("rel") ?? "").toLowerCase().split(/\s+/).filter(Boolean);

    const image = anchor.find("img").first();

    links.push({
      url: href,

      absoluteUrl: absoluteUrl.href,

      anchorText: anchor.text().trim(),

      isImage: image.length > 0,

      altText: image.length ? (image.attr("alt") ?? null) : null,

      relAttributes: rel,

      linkType: getLinkType(href, absoluteUrl, baseUrl),

      target:
        (anchor.attr("target") as "_blank" | "_self" | "_parent" | "_top" | undefined) ?? null,

      title: anchor.attr("title") ?? null,

      hreflang: anchor.attr("hreflang") ?? null,

      type: anchor.attr("type") ?? null,

      isInternal: absoluteUrl.hostname === baseUrl.hostname,

      isDoFollow: !rel.includes("nofollow"),

      isSponsored: rel.includes("sponsored"),

      isUGC: rel.includes("ugc"),

      isNoOpener: rel.includes("noopener"),

      isNoReferrer: rel.includes("noreferrer"),

      isDownload: anchor.is("[download]"),

      domain: absoluteUrl.hostname,

      protocol:
        absoluteUrl.protocol === "http:"
          ? "http"
          : absoluteUrl.protocol === "https:"
            ? "https"
            : null,

      position,

      html: $.html(element),
    });
  });

  return links;
}
