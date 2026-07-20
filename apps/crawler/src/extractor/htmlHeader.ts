import { HTMLHeaderType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
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
import { getAlternateData } from "@/utils/htmlHeaders/getAlternateData.js";

export function htmlHeaderExtractor($: cheerio.CheerioAPI, url: URL): HTMLHeaderType {
  const title = getTitleData($);
  const metaDescription = getMetaDescriptionData($);
  const metaRobots = getMetaRobotsData($);
  const canonical = getCanonicalData($, url);
  const metaViewport = getMetaViewportData($);
  const openGraph = getOpenGraphData($);
  const hreflang = getHrefLangData($, url);
  const twitterCard = getTwitterCardData($);
  const favicon = getFaviconData($, url);
  const resourceHints = getResourceHintData($, url);
  const alternate = getAlternateData($, url);

  // ############### other info #################
  let sitename: string | null = null;
  sitename = $("meta[property='og:site_name']").attr("content") || null;

  const manifestHref = $('link[rel="manifest"]').attr("href");
  const manifest = manifestHref ? new URL(manifestHref, url).href : null;

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
    alternate,
    sitename,
    manifest,
  };
}
