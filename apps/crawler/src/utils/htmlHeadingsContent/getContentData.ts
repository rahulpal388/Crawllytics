import crypto from "node:crypto";
import * as cheerio from "cheerio";
import { HTMLContentType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";

export function getContentData($: cheerio.CheerioAPI): HTMLContentType {
  // Clone the document so we don't mutate the original Cheerio instance
  const body = $("body").clone();

  // Remove elements that do not contribute to visible page content
  body.find("script").remove();
  body.find("style").remove();
  body.find("noscript").remove();
  body.find("template").remove();

  // Normalize whitespace
  const visibleText = body.text().replace(/\s+/g, " ").trim();

  const language = $("html").attr("lang")?.trim() || null;

  const contentHash = crypto.createHash("sha256").update(visibleText).digest("hex");

  return {
    visibleText,
    language,
    contentHash,
  };
}
