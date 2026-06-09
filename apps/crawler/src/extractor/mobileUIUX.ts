import * as cheerio from "cheerio";
import { MobileUIUXType } from "@repo/config/types/urlInformationType/mobileUIUXTypes";
export function mobileUIUX($: cheerio.CheerioAPI): MobileUIUXType {
    const metaViewport = $('meta[name="viewport"]');
    const hasMetaViewport = metaViewport.length > 0;

    const viewportContent = metaViewport.attr('content') || "";
    const viewportIsMobileReady = viewportContent.includes("width=device-width") && viewportContent.includes("initial-scale=1");


    return {
        hasMetaViewport,
        viewportIsMobileReady,
        smallTapTargets: 0, // Placeholder for small tap targets count
        horizontalScrollRisk: false, // Placeholder for horizontal scroll risk detection
        textTooSmall: false, // Placeholder for text size evaluation
        intrinsivePopupDetected: false, // Placeholder for intrinsic popup detection
        touchIconPresent: false, // Placeholder for touch icon presence
        fontScalingSupported: false, // Placeholder for font scaling support detection
    }

}