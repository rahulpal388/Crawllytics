import * as cheerio from "cheerio";
import { HTMLHeadingContentType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";
import { getContentData } from "@/utils/htmlHeadingsContent/getContentData.js";
import { getHeadingData } from "@/utils/htmlHeadingsContent/getHeadingData.js";

export function htmlHeadingContentsExtractor($: cheerio.CheerioAPI): HTMLHeadingContentType {
  const headings = getHeadingData($);
  const content = getContentData($);

  return {
    headings,
    content,
  };
}
