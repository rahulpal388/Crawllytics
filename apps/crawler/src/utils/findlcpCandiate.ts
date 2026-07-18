import { LcpCandidateType } from "@repo/config/types/urlInformationType/performanceSignalTypes";
import * as cheerio from "cheerio";

type ImageCandidate = {
  src: string;
  area: number;
  isPreloaded: boolean;
  hasEagerLoading: boolean;
};

export function findLcpCandidate($: cheerio.CheerioAPI): LcpCandidateType {
  const preloadedImages = new Set<string>();

  $('link[rel="preload"][as="image"]').each((_, el) => {
    const href = $(el).attr("href");

    if (href) {
      preloadedImages.add(href);
    }
  });

  let bestImage: ImageCandidate | null = null;

  const images = $("img").toArray();

  for (const el of images) {
    const src = $(el).attr("src");

    if (!src) {
      continue;
    }

    const width = Number($(el).attr("width")) || 0;
    const height = Number($(el).attr("height")) || 0;

    const candidate: ImageCandidate = {
      src,
      area: width * height,
      isPreloaded: preloadedImages.has(src),
      hasEagerLoading: $(el).attr("loading") === "eager",
    };

    if (bestImage === null || candidate.area > bestImage.area) {
      bestImage = candidate;
    }
  }

  if (bestImage !== null) {
    return {
      type: "image",
      src: bestImage.src,
      isPreloaded: bestImage.isPreloaded,
      hasEagerLoading: bestImage.hasEagerLoading,
    };
  }

  return {
    type: "text",
    src: null,
    isPreloaded: false,
    hasEagerLoading: false,
  };
}
