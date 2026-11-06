import { getImageData } from "@/utils/htmlMedia/getImagesData.js";
import { getImageSize } from "@/utils/getImageSize.js";
import { HTMLImageType } from "@repo/contracts/types/crawl/urlCrawl/htmlInfo/HTMLMediaTypes/htmlImagesType";
import * as Cheerio from "cheerio";

const BATCH_SIZE = 10; // Number of images to process in parallel

export async function imagesWithSize(
  $: Cheerio.CheerioAPI,
  preloadImages: Set<string>,
  baseUrl: URL,
): Promise<(HTMLImageType & { fileSizeBytes: number | null })[]> {
  const images: (HTMLImageType & { fileSizeBytes: number | null })[] = getImageData($, baseUrl).map(
    (image) => ({
      ...image,
      fileSizeBytes: null,
    }),
  );

  for (let i = 0; i < images.length; i += BATCH_SIZE) {
    const batch = images.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map(async (image) => {
        const size = await getImageSize(image.src, baseUrl);
        image.fileSizeBytes = size;
      }),
    );
  }

  return images;
}
