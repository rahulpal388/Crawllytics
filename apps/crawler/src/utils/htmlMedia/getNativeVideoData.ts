import * as cheerio from "cheerio";
import { HTMLVideoType } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlVideoType";

export function getNativeVideoData($: cheerio.CheerioAPI, baseUrl: URL): HTMLVideoType[] {
  const videos: HTMLVideoType[] = [];

  $("video").each((_, element) => {
    const video = $(element);

    const src = video.attr("src") ?? video.find("source").first().attr("src") ?? "";

    const absoluteUrl = src ? new URL(src, baseUrl).href : "";

    const type = video.attr("type") ?? video.find("source").first().attr("type") ?? null;

    const poster = video.attr("poster") ? new URL(video.attr("poster")!, baseUrl).href : null;

    const preload = (video.attr("preload") as "auto" | "metadata" | "none" | undefined) ?? null;

    const width = video.attr("width") ? Number(video.attr("width")) : null;

    const height = video.attr("height") ? Number(video.attr("height")) : null;

    const captionTracks = video.find('track[kind="captions"], track[kind="subtitles"]');

    const captionLanguages = captionTracks
      .map((_, el) => $(el).attr("srclang") ?? "")
      .get()
      .filter(Boolean);

    const isPreloaded = $('link[rel="preload"][as="video"]')
      .toArray()
      .some((link) => {
        const href = $(link).attr("href");
        if (!href) return false;

        try {
          return new URL(href, baseUrl).href === absoluteUrl;
        } catch {
          return false;
        }
      });

    videos.push({
      src,
      absoluteUrl,
      type,

      controls: video.is("[controls]"),
      autoPlay: video.is("[autoplay]"),
      muted: video.is("[muted]"),
      loop: video.is("[loop]"),
      playsInline: video.is("[playsinline]"),

      preload,

      poster,

      width,
      height,

      // Requires network/media inspection
      duration: null,
      fileSizeBytes: null,

      // Accessibility
      hasCaptions: captionTracks.length > 0,
      captionLanguages,
      hasTranscript: false,

      // Native video
      isEmbedded: false,
      embedProvider: null,
      embedUrl: null,
    });
  });
  return videos;
}
