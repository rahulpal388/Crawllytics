import { findImages } from "@/utils/findImages.js";
import { getImageSize } from "@/utils/getImageSize.js";
import { ImageType } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import * as Cheerio from "cheerio";

const BATCH_SIZE = 10; // Number of images to process in parallel

export async function imagesWithSize($: Cheerio.CheerioAPI, preloadImages: Set<String>): Promise<ImageType[]> {

    const images = findImages($, preloadImages);


    for (let i = 0; i < images.length; i += BATCH_SIZE) {
        const batch = images.slice(i, i + BATCH_SIZE);

        await Promise.all(
            batch.map(async (image) => {
                const size = await getImageSize(image.src);
                image.fileSizeBytes = size;
            })
        )
    }


    return images;

}