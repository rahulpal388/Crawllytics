import { findImages } from "@/utils/findImages.js";
import { findVideos } from "@/utils/findVideo.js";
import { imagesWithSize } from "@/utils/imagesWithSize.js";
import { ResourceHintType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { HTMLMediaTypes, ImageType, VideoType } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import * as Cheerio from "cheerio";


export async function htmlMediaExtractor(html: string, preloadImages: Set<String>) {

    const $ = Cheerio.load(html);

    const images = await imagesWithSize($, preloadImages);
    const videos = findVideos($);


    console.log("Extracted videos:", videos);
}

