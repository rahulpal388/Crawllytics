import * as cheerio from "cheerio";
import path from "node:path";

import { HTMLImageType } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlImagesType";
import { getImageFormate } from "@/utils/htmlMedia/getImageFormate.js";
import { isImagePreloaded } from "@/utils/htmlMedia/isImagePreloaded.js";
import { getImageSrcSet } from "@/utils/htmlMedia/getImageSrcSet.js";

export function getImageData($: cheerio.CheerioAPI, baseUrl: URL): HTMLImageType[] {
  const images: HTMLImageType[] = [];

  $("img").each((_, element) => {
    const img = $(element);

    const src = img.attr("src") ?? "";

    const absoluteUrl = src ? new URL(src, baseUrl).href : "";

    const altText = img.attr("alt") ?? "";

    const title = img.attr("title") ?? null;

    const ariaLabel = img.attr("aria-label") ?? null;

    const width = img.attr("width") ? Number(img.attr("width")) : null;

    const height = img.attr("height") ? Number(img.attr("height")) : null;

    const loading = (img.attr("loading") as "lazy" | "eager" | undefined) ?? null;

    const fetchPriority =
      (img.attr("fetchpriority") as "high" | "low" | "auto" | undefined) ?? null;

    const decoding = (img.attr("decoding") as "async" | "sync" | "auto" | undefined) ?? null;

    const srcSet = getImageSrcSet(img, baseUrl);

    const sizes = img.attr("sizes") ?? null;

    const filename = absoluteUrl ? path.basename(new URL(absoluteUrl).pathname) : "";

    const extension = filename.includes(".")
      ? (filename.split(".").pop()?.toLowerCase() ?? null)
      : null;

    const format = getImageFormate(extension);

    const isPreloaded = isImagePreloaded($, absoluteUrl, baseUrl);

    images.push({
      // Source
      src,
      absoluteUrl,
      originalAttribute: srcSet.length ? "srcset" : "src",
      sourceTag: img.parent().is("picture") ? "picture" : "img",

      // Accessibility
      altText,
      altLength: altText.length,
      hasAlt: img.is("[alt]"),
      isDecorative: img.attr("alt") === "",
      title,
      ariaLabel,

      // Dimensions
      widthDeclared: img.is("[width]"),
      heightDeclared: img.is("[height]"),
      width,
      height,

      // Loading
      loading,
      fetchPriority,
      decoding,

      // Responsive
      srcSet,
      sizes,
      responsive: srcSet.length > 0,
      insidePicture: img.parent().is("picture"),

      // Format
      extension,
      mimeType: null,
      format,

      // Rendering
      isAboveTheFold: null,
      isHeroImage: false,
      isBackgroundImage: false,

      // SEO
      filename,
      filenameReadable: /^[a-z0-9-_.]+$/i.test(filename),
      containsKeyword: null,

      // HTML
      isPreloaded,
    });
  });

  return images;
}
