import { getAudioData } from "@/utils/htmlMedia/getAudioData.js";
import { getImageData } from "@/utils/htmlMedia/getImagesData.js";
import { getVideoData } from "@/utils/htmlMedia/getVideoData.js";
import { HTMLMediaTypes } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlMediaTypes";
import * as Cheerio from "cheerio";

export async function htmlMediaExtractor(
  $: Cheerio.CheerioAPI,
  baseUrl: URL,
): Promise<HTMLMediaTypes> {
  const images = getImageData($, baseUrl);
  const videos = getVideoData($, baseUrl);
  const audios = getAudioData($, baseUrl);

  return {
    images,
    videos,
    audios,
  };
}
