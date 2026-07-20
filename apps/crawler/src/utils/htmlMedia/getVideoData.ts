import * as cheerio from "cheerio";
import { HTMLVideoType } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlVideoType";
import { getEmbeddedVideoData } from "@/utils/htmlMedia/getEmbeddedVideoData.js";
import { getNativeVideoData } from "@/utils/htmlMedia/getNativeVideoData.js";

export function getVideoData($: cheerio.CheerioAPI, baseUrl: URL): HTMLVideoType[] {
  return [...getEmbeddedVideoData($, baseUrl), ...getNativeVideoData($, baseUrl)];
}
