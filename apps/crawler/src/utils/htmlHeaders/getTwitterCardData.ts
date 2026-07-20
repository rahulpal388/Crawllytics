import * as cheerio from "cheerio";
import { TwitterCardType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function getTwitterCardData($: cheerio.CheerioAPI): TwitterCardType {
  const twitterMap = new Map<string, string[]>();

  $('meta[name^="twitter:"]').each((_, el) => {
    const name = $(el).attr("name")?.trim();
    const content = $(el).attr("content")?.trim();

    if (!name || !content) return;

    if (!twitterMap.has(name)) {
      twitterMap.set(name, []);
    }

    twitterMap.get(name)!.push(content);
  });

  return {
    card: twitterMap.get("twitter:card")?.[0] ?? "",

    title: twitterMap.get("twitter:title")?.[0] ?? "",

    description: twitterMap.get("twitter:description")?.[0] ?? "",
    image: twitterMap.get("twitter:image")?.[0] ?? "",

    site: twitterMap.get("twitter:site")?.[0] ?? "",

    creator: twitterMap.get("twitter:creator")?.[0] ?? "",

    imageAlt: twitterMap.get("twitter:image:alt")?.[0] ?? null,

    player: {
      playerUrl: twitterMap.get("twitter:player")?.[0] ?? "",

      width: Number(twitterMap.get("twitter:player:width")?.[0]) || 0,

      height: Number(twitterMap.get("twitter:player:height")?.[0]) || 0,

      streamUrl: twitterMap.get("twitter:player:stream")?.[0] ?? null,

      streamContentType: twitterMap.get("twitter:player:stream:content_type")?.[0] ?? null,
    },
  };
}
