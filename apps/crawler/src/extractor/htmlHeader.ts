import { tempHtml } from "@/extractor/tempHtml.js";
import { HTMLCanonicalType, HTMLHeaderType, HTMLMetaDescriptionType, HTMLMetaRobotType, HTMLMetaViewportType, HTMLTitleType } from "@/types/htmlHeaderResponseTypes.js";
import { isAbsoluteUrl } from "@/utils/isAbsoluteUrl.js";
import * as cherrio from "cheerio";


export function htmlHeaderExtractor(html: string, url: string): HTMLHeaderType {


    const $ = cherrio.load(html);

    // <--------------  title section   --------------->
    const titleValue: HTMLTitleType[] = [];
    $("title").each((i, el) => {
        const text = $(el).text();
        const lengthChar = text.length;
        const lengthPixel = lengthChar * 10;
        titleValue.push({
            text,
            lengthChar,
            lengthPixel,
        });
    });

    // <-------------- metaDescition section ------------->
    const metaDescription: HTMLMetaDescriptionType[] = [];
    const meta = $(`meta[name="description"]`)
    meta.each((i, el) => {
        const text = $(el).attr("content") || "";
        const lengthChar = text.length;
        const lengthPixel = lengthChar * 10;
        metaDescription.push({
            text,
            lengthChar,
            lengthPixel,
        })
    })


    // <------------  metaRobotTag ------------->
    let metaRobot: HTMLMetaRobotType | null = null;

    const metaRobotContent = $(`meta[name="robots"]`).attr("content") || "";

    const contentArr = metaRobotContent.split(",").map(items => items.trim().toLowerCase());
    let robotValue = ""
    let followValue = "";
    let snippetControl = ""
    let imageControl = ""
    let videoControl = ""

    for (const value of contentArr) {
        // index / noindex
        if (value === "index" || value === "noindex") {
            robotValue = value;
        }
        // follow / nofollow
        if (value === "follow" || value === "nofollow") {
            followValue = value;
        }

        // max-snippet
        if (value.startsWith("max-snippet")) {
            snippetControl = value;
        }

        // max-image-preview
        if (value.startsWith("max-image-preview")) {
            imageControl = value;
        }

        // max-video-preview
        if (value.startsWith("max-video-preview")) {
            videoControl = value;
        }
    }
    metaRobot = {
        robotValue,
        followValue,
        snippetControl,
        imageControl,
        videoControl
    }


    // <------------- canonical ------------------->
    const canonical: HTMLCanonicalType[] = [];

    $(`link[rel="canonical"]`).each((i, el) => {

        let canonicalUrl = ""
        let isSelfReferencing = false;
        let isCrossPage = false
        let isCrossDomain = false
        try {
            const resolvedCanonical = new URL(canonicalUrl, url);
            const currentUrl = new URL(url);
            isSelfReferencing =
                resolvedCanonical.href === currentUrl.href;
            isCrossPage =
                resolvedCanonical.href !== currentUrl.href;
            isCrossDomain =
                resolvedCanonical.hostname !== currentUrl.hostname;
        } catch {
            console.log("Invalid Canonical URL: ", canonicalUrl);
        }

        canonical.push({
            canonicalUrl,
            isSelfReferencing,
            isCrossPage,
            isCrossDomain,
            isAbsoluteUrl: isAbsoluteUrl(canonicalUrl)

        })
    })



    // <------------- metaViewport ------------------->
    const metaViewportContent = $(`meta[name="viewport"]`).attr("content") || "";
    let metaViewport: HTMLMetaViewportType = {
        value: metaViewportContent,
        isMobileReady: metaViewportContent.includes("width=device-width")
    }

    // <------------- openGraph ------------------->
    const openGraph = {
        title: $(`meta[property="og:title"]`).attr("content") || "",
        description: $(`meta[property="og:description"]`).attr("content") || "",
        image: $(`meta[property="og:image"]`).attr("content") || "",
        url: $(`meta[property="og:url"]`).attr("content") || "",
        type: $(`meta[property="og:type"]`).attr("content") || ""
    }

    return {
        title: titleValue,
        meta: {
            metaDescription: metaDescription,
            metaRobot: metaRobot,
            Canonical: canonical,
            openGraph: openGraph,
            metaViewport: metaViewport,
        },
    }



}




