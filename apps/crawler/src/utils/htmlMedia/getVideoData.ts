import * as cheerio from "cheerio";
import { HTMLVideoType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/HTMLMediaTypes/htmlVideoType";
import { getEmbeddedVideoData } from "@/utils/htmlMedia/getEmbeddedVideoData.js";
import { getNativeVideoData } from "@/utils/htmlMedia/getNativeVideoData.js";

export function getVideoData($: cheerio.CheerioAPI, baseUrl: URL): HTMLVideoType[] {
  return [...getEmbeddedVideoData($, baseUrl), ...getNativeVideoData($, baseUrl)];
}
