import { HTMLMediaTypes } from "@/types/htmlMediaTypes.js";
import * as Cheerio from "cheerio";


export function htmlMediaExtractor(html: string): HTMLMediaTypes {

    const $ = Cheerio.load(html);
    const images: HTMLMediaTypes["images"] = [];
    const videos: HTMLMediaTypes["videos"] = [];

    $("img").each((i, el) => {
        const src = $(el).attr("src") || "";
        const alt = $(el).attr("alt") || "";
        const width = parseInt($(el).attr("width") || "0", 10);
        const height = parseInt($(el).attr("height") || "0", 10);
        // Store or process the image information as needed
        images.push({
            src,
            altText: alt,
            altTextLength: alt.length,
            hasAltText: !!alt,
            altEmpty: alt === "",
            widthDeclare: !isNaN(width),
            heightDeclare: !isNaN(height),
            loadingAttribute: $(el).attr("loading") || "auto"
        });
    });

    $("video").each((i, el) => {
        const src = $(el).attr("src") || "";
        const width = parseInt($(el).attr("width") || "0", 10);
        const height = parseInt($(el).attr("height") || "0", 10);
        // Store or process the video information as needed
        videos.push({
            src,
            hasVideo: !!src,
            videoType: $(el).attr("type") || "",
            hasTranscript: !!$(el).attr("track"),
            autoPlay: $(el).attr("autoplay") === "true"
        });
    });

    return { images, videos };
}