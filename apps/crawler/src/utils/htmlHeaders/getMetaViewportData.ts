import { HTMLMetaViewportType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import * as cheerio from "cheerio";

/*
 * Gather Meta Viewport Data from the HTML Document
 */

export function getMetaViewportData($: cheerio.CheerioAPI): HTMLMetaViewportType[] {
  const viewports: HTMLMetaViewportType[] = [];

  $('meta[name="viewport"]').each((_, el) => {
    const content = $(el).attr("content")?.trim() ?? "";

    const params = new Map<string, string>();

    content.split(",").forEach((part) => {
      const [key, value] = part.split("=").map((v) => v.trim());

      if (key) {
        params.set(key.toLowerCase(), value ?? "");
      }
    });

    viewports.push({
      value: content,

      width: params.get("width") ?? null,

      initialScale: params.has("initial-scale") ? Number(params.get("initial-scale")) : null,

      minimumScale: params.has("minimum-scale") ? Number(params.get("minimum-scale")) : null,

      maximumScale: params.has("maximum-scale") ? Number(params.get("maximum-scale")) : null,

      userScalable: params.has("user-scalable") ? params.get("user-scalable") === "yes" : null,

      viewportFit: (params.get("viewport-fit") as "auto" | "contain" | "cover" | undefined) ?? null,

      interactiveWidget: params.get("interactive-widget") ?? null,
    });
  });

  return viewports;
}
