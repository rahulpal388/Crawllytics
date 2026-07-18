import { VideoType } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import * as Cheerio from "cheerio";

export function findVideos($: Cheerio.CheerioAPI): VideoType[] {
  const videos: VideoType[] = [];

  $("video").each((index, element) => {
    const src = $(element).attr("src") || $(element).find("source").first().attr("src") || "";
    const type = $(element).find("source").first().attr("type") || $(element).attr("type") || null;
    const autoPlay = $(element).attr("autoplay") !== undefined;
    const controls = $(element).attr("controls") !== undefined;
    const muted = $(element).attr("muted") !== undefined;
    const preload = $(element).attr("preload") as "auto" | "metadata" | "none" | null;
    const hasCaptions =
      $(element).find("track[kind='captions'], track[kind='subtitles']").length > 0;
    const hasTranscript = $('[class*="transcript"], [id*="transcript"]').length > 0;

    videos.push({
      src,
      type,
      autoPlay,
      controls,
      muted,
      preload,
      hasCaptions,
      hasTranscript,
      isEmbedded: false,
      embedProvider: null,
    });
  });

  $("iframe").each((_, element) => {
    const src = $(element).attr("src") || "";

    let embedProvider: "youtube" | "vimeo" | null = null;

    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      embedProvider = "youtube";
    } else if (src.includes("vimeo.com")) {
      embedProvider = "vimeo";
    }

    if (!embedProvider) {
      return;
    }

    videos.push({
      src,
      type: null,
      autoPlay: false,
      controls: false,
      muted: false,
      preload: null,
      hasCaptions: false,
      hasTranscript: false,
      isEmbedded: true,
      embedProvider,
    });
  });

  return videos;
}
