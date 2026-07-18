import {
    HTMLHeaderType,
    HTMLMetaDescriptionType,
    HTMLTitleType,
    RobotDirective,
} from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import * as cheerio from "cheerio";
import { getCanonicalData } from "@/utils/htmlHeaders/getCanonicalData.js";
import { getMetaViewportData } from "@/utils/htmlHeaders/getMetaViewportData.js";
import { getOpenGraphData } from "@/utils/htmlHeaders/getOpenGraphData.js";
import { getHrefLangData } from "@/utils/htmlHeaders/getHrefLangData.js";
import { getTwitterCardData } from "@/utils/htmlHeaders/getTwitterCardData.js";
import { getFaviconData } from "@/utils/htmlHeaders/getFaviconData.js";
import { getResourceHintData } from "@/utils/htmlHeaders/getResourceHintData.js";
import { getTitleData } from "@/utils/htmlHeaders/getTitleData.js";
import { getMetaDescriptionData } from "@/utils/htmlHeaders/getMetaDescriptionData.js";
import { getMetaRobotsData } from "@/utils/htmlHeaders/getMetaRobotsData.js";

export function htmlHeaderExtractor($: cheerio.CheerioAPI, url: URL): HTMLHeaderType {
    // <--------------  title section   --------------->
    const title = getTitleData($);

    // <-------------- metaDescition section ------------->
    const metaDescription = getMetaDescriptionData($);

    // <------------  metaRobotTag ------------->

    const metaRobots = getMetaRobotsData($);
    // <------------- canonical ------------------->

    const canonical = getCanonicalData($, url);

    // <------------- metaViewport ------------------->
    const metaViewport = getMetaViewportData($);

    // <------------- openGraph ------------------->
    const openGraph = getOpenGraphData($);

    // ---------------------- hreflang ----------------------
    const hreflang = getHrefLangData($, url);


    // ---------------------- twitter card ----------------------
    const twitterCard = getTwitterCardData($);

    // ---------------------- favicon ----------------------
    const favicon = getFaviconData($, url);

    // ---------------------- resource hints ----------------------
    const resourceHints = getResourceHintData($, url);

    // ---------------------- sitename (from title or openGraph) ----------------------
    let sitename: string | null = null;
    sitename = $("meta[property='og:site_name']").attr("content") || null;

    return {
        title,
        meta: {
            metaDescription: metaDescription,
            metaRobot: [...metaRobots],
            Canonical: canonical,
            openGraph: openGraph,
            metaViewport: metaViewport,
        },
        hreflang,
        twitterCard,
        favicon,
        resourceHints,
        sitename,
    };
}
