import { MobileHtmlDataType } from "@repo/config/types/urlInformationType/HTMLMobileType";
import * as cheerio from "cheerio";
import { getViewport } from "@/utils/mobileHtmlData/getIViewPortData.js";
import { getManifest } from "@/utils/mobileHtmlData/getManifestData.js";
import { getAppleTouchIcons } from "@/utils/mobileHtmlData/getAppleTouchIcon.js";
import { getThemeColor } from "@/utils/mobileHtmlData/getThemeColor.js";
import { getMobileWebAppMeta } from "@/utils/mobileHtmlData/getMobileWebAppMeta.js";
import { getFormatDetection } from "@/utils/mobileHtmlData/getFormateDetection.js";
import { getAmp } from "@/utils/mobileHtmlData/getAMP.js";
import { getAlternateMobileUrl } from "@/utils/mobileHtmlData/getAlternateMobileUrl.js";

export function getMobileHtmlData($: cheerio.CheerioAPI, baseUrl: URL): MobileHtmlDataType {
  return {
    ...getViewport($),
    ...getManifest($, baseUrl),
    ...getAppleTouchIcons($, baseUrl),
    ...getThemeColor($),
    ...getMobileWebAppMeta($),

    formatDetection: getFormatDetection($),

    ...getAmp($, baseUrl),

    mobileAlternateUrl: getAlternateMobileUrl($, baseUrl),
  };
}
