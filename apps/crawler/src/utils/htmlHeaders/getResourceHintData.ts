import * as cheerio from "cheerio";
import {
  ResourceHintType,
  ResourceHintRelType,
} from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function getResourceHintData($: cheerio.CheerioAPI, baseUrl: URL): ResourceHintType[] {
  const resourceHints: ResourceHintType[] = [];

  $("link[rel]").each((_, element) => {
    const rel = ($(element).attr("rel") || "").trim().toLowerCase();

    const supportedRels = new Set([
      "preconnect",
      "dns-prefetch",
      "preload",
      "prefetch",
      "modulepreload",
      "prerender",
    ]);

    if (!supportedRels.has(rel)) {
      return;
    }

    const href = ($(element).attr("href") || "").trim();

    if (!href) {
      return;
    }

    let absoluteHref: string;

    try {
      absoluteHref = new URL(href, baseUrl).href;
    } catch {
      absoluteHref = href;
    }

    resourceHints.push({
      rel: rel as ResourceHintRelType,

      href: absoluteHref,

      as: ($(element).attr("as") || null)?.trim() || null,

      type: ($(element).attr("type") || null)?.trim() || null,

      media: ($(element).attr("media") || null)?.trim() || null,

      crossOrigin: ($(element).attr("crossorigin") || null)?.trim() || null,

      fetchPriority:
        (($(element).attr("fetchpriority") || "").trim().toLowerCase() as
          "high" | "low" | "auto") || null,

      imageSrcSet: ($(element).attr("imagesrcset") || null)?.trim() || null,

      imageSizes: ($(element).attr("imagesizes") || null)?.trim() || null,

      disabled: $(element).is("[disabled]"),
    });
  });

  return resourceHints;
}
