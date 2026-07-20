import { HTMLVideoType } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlVideoType";

import * as cheerio from "cheerio";

export function getEmbeddedVideoData($: cheerio.CheerioAPI, baseUrl: URL): HTMLVideoType[] {
  const videos: HTMLVideoType[] = [];
  $("iframe").each((_, element) => {
    const iframe = $(element);

    const src = iframe.attr("src");
    if (!src) return;

    const absoluteUrl = new URL(src, baseUrl).href;

    let provider: HTMLVideoType["embedProvider"] = null;

    if (absoluteUrl.includes("youtube.com") || absoluteUrl.includes("youtu.be")) {
      provider = "youtube";
    } else if (absoluteUrl.includes("vimeo.com")) {
      provider = "vimeo";
    } else if (absoluteUrl.includes("wistia.com")) {
      provider = "wistia";
    } else if (absoluteUrl.includes("loom.com")) {
      provider = "loom";
    } else {
      provider = "other";
    }

    videos.push({
      src,
      absoluteUrl,
      type: null,

      controls: false,
      autoPlay: false,
      muted: false,
      loop: false,
      playsInline: false,

      preload: null,

      poster: null,

      width: iframe.attr("width") ? Number(iframe.attr("width")) : null,

      height: iframe.attr("height") ? Number(iframe.attr("height")) : null,

      duration: null,
      fileSizeBytes: null,

      hasCaptions: false,
      captionLanguages: [],
      hasTranscript: false,

      isEmbedded: true,
      embedProvider: provider,
      embedUrl: absoluteUrl,
    });
  });

  return videos;
}
