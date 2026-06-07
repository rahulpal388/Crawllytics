import { findImages } from "@/utils/findImages.js";
import { findVideos } from "@/utils/findVideo.js";
import { imagesWithSize } from "@/utils/imagesWithSize.js";
import { ResourceHintType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { HTMLMediaTypes, ImageType, VideoType } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import * as Cheerio from "cheerio";


export async function htmlMediaExtractor(html: string, preloadImages: Set<String>, baseUrl: URL): Promise<HTMLMediaTypes> {

    const $ = Cheerio.load(html);

    const images = await imagesWithSize($, preloadImages, baseUrl);
    const videos = findVideos($);

    const imagesMissingAlt = images.filter(image => !image.hasAlt).length;
    const imagesWithoutDimensions = images.filter(image => !image.widthDeclared || !image.heightDeclared).length;
    const imagesNotLazyLoaded = images.filter(image => image.loading !== "lazy").length;
    const notWebpOrAvif = images.filter(image => image.format !== "webp" && image.format !== "avif").length;

    const totalImageWeight = images.reduce((total, image) => {
        total += image.fileSizeBytes || 0;
        return total;
    }, 0)

    return {
        images,
        videos,
        imagesMissingAlt,
        imagesMissingDimensions: imagesWithoutDimensions,
        imagesNotLazy: imagesNotLazyLoaded,
        notWebpOrAvif: notWebpOrAvif,
        totalImageSize: totalImageWeight,
    }

}

