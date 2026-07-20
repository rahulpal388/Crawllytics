import * as cheerio from "cheerio";
import { HTMLAudioType } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlAudioType";

export function getAudioData($: cheerio.CheerioAPI, baseUrl: URL): HTMLAudioType[] {
  const audios: HTMLAudioType[] = [];

  $("audio").each((_, element) => {
    const audio = $(element);

    let src = audio.attr("src") ?? audio.find("source").first().attr("src") ?? "";

    if (src) {
      src = new URL(src, baseUrl).href;
    }

    const type = audio.find("source").first().attr("type") ?? null;

    const preload = (audio.attr("preload") as "auto" | "metadata" | "none" | undefined) ?? null;

    audios.push({
      src,
      type,
      controls: audio.is("[controls]"),
      autoplay: audio.is("[autoplay]"),
      preload,
    });
  });

  return audios;
}
