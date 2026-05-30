import { HTMLCanonicalType, HTMLHeaderType, HTMLMetaDescriptionType, HTMLMetaRobotType, HTMLMetaViewportType, HTMLTitleType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { isAbsoluteUrl } from "@/utils/isAbsoluteUrl.js";
import { HreflangType, TwitterCardType, PaginationType, FaviconType, ResourceHintType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import * as cherrio from "cheerio";


export function htmlHeaderExtractor(html: string, url: string): HTMLHeaderType {


    const $ = cherrio.load(html);

    // <--------------  title section   --------------->
    const titleValue: HTMLTitleType[] = [];
    $("title").each((i, el) => {
        const text = $(el).text();
        const lengthChar = text.length;
        const lengthPixel = lengthChar * 10;
        const wordCount = text.trim().split(/\s+/).length;
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

    metaRobot = {
        content: metaRobotContent
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
            url: canonicalUrl,
            isSelf: isSelfReferencing,
            isCrossPage: isCrossPage,
            isCrossDomain: isCrossDomain,
            isAbsoluteUrl: isAbsoluteUrl(canonicalUrl),
        })
    })



    // <------------- metaViewport ------------------->
    const metaViewportContent = $(`meta[name="viewport"]`).attr("content") || "";
    let metaViewport: HTMLMetaViewportType = {
        value: metaViewportContent,
        isMobileReady: metaViewportContent.includes("width=device-width"),
        hasInitialScale: metaViewportContent.includes("initial-scale")
    }


    // <------------- openGraph ------------------->
    const openGraph = {
        title: $(`meta[property="og:title"]`).attr("content") || "",
        description: $(`meta[property="og:description"]`).attr("content") || "",
        image: $(`meta[property="og:image"]`).attr("content") || "",
        url: $(`meta[property="og:url"]`).attr("content") || "",
        type: $(`meta[property="og:type"]`).attr("content") || "",
        siteName: $(`meta[property="og:site_name"]`).attr("content") || "",
        locale: $(`meta[property="og:locale"]`).attr("content") || "",
        imageWidth: $(`meta[property="og:image:width"]`).attr("content") || "",
        imageHeight: $(`meta[property="og:image:height"]`).attr("content") || ""
    }



    // ---------------------- hreflang ----------------------
    const hreflang: HreflangType[] = [];
    $(`link[rel="alternate"][hreflang]`).each((i, el) => {
        const lang = $(el).attr("hreflang") || "";
        const href = $(el).attr("href") || "";
        const region = lang.includes("-") ? lang.split("-")[1] : null;
        hreflang.push({
            lang,
            href,
            hrefStatusCode: null,
            isReturn: false,
            region: region ?? null,
        })
    })


    // ---------------------- pagination ----------------------
    const pagination: PaginationType = {
        prev: $(`link[rel="prev"]`).attr("href") || null,
        next: $(`link[rel="next"]`).attr("href") || null,
    }


    // ---------------------- twitter card ----------------------
    const twitterCard: TwitterCardType = {
        card: $(`meta[name="twitter:card"]`).attr("content") || "",
        title: $(`meta[name="twitter:title"]`).attr("content") || "",
        description: $(`meta[name="twitter:description"]`).attr("content") || "",
        image: $(`meta[name="twitter:image"]`).attr("content") || "",
        site: $(`meta[name="twitter:site"]`).attr("content") || "",
        creator: $(`meta[name="twitter:creator"]`).attr("content") || ""
    }


    // ---------------------- favicon ----------------------
    const favicon: FaviconType[] = [];
    $(`link[rel="icon"], link[rel="shortcut icon"]`).each((i, el) => {
        const href = $(el).attr("href") || "";
        const type = $(el).attr("type") || null;
        favicon.push({
            href,
            type,
            sizes: $(el).attr("sizes") || null,
        })
    })


    // ---------------------- resource hints ----------------------
    const resourceHints: ResourceHintType[] = [];
    $(`link[rel="preconnect"], link[rel="preload"], link[rel="prefetch"], link[rel="dns-prefetch"]`).each((i, el) => {
        const rel = $(el).attr("rel") as ResourceHintType["rel"];
        const href = $(el).attr("href") || "";
        resourceHints.push({
            rel,
            href,
            as: $(el).attr("as") || null,
        });
    });

    return {
        title: titleValue,
        meta: {
            metaDescription: metaDescription,
            metaRobot,
            Canonical: canonical,
            openGraph: openGraph,
            metaViewport: metaViewport,
        },
        hreflang,
        pagination,
        twitterCard,
        favicon,
        resourceHints,
    }



}




