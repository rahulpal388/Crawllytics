import * as Cheerio from "cheerio";
import { StylesheetType } from "@repo/config/types/urlInformationType/performanceSignalTypes";

export function getStyleSheetInfo($: Cheerio.CheerioAPI): StylesheetType[] {
  const styleSheet: StylesheetType[] = [];

  $("link[rel='stylesheet']").each((_, element) => {
    const href = $(element).attr("href") || null;
    const rel = $(element).attr("rel") || null;
    const isInline = element.tagName === "style";
    const media = $(element).attr("media") || null;
    const isRenderBlocking = !isInline && rel === "stylesheet" && (!media || media === "all");

    styleSheet.push({
      href,
      isInline,
      isRenderBlocking,
      media,
    });
  });

  return styleSheet;
}
