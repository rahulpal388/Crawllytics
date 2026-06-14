import * as cheerio from "cheerio";
import { MobileUIUXType } from "@repo/config/types/urlInformationType/mobileUIUXTypes";

export function mobileUIUX($: cheerio.CheerioAPI): MobileUIUXType {
    // ========================================
    // Viewport
    // ========================================

    const metaViewport = $('meta[name="viewport"]');
    const hasMetaViewport = metaViewport.length > 0;

    const viewportContent =
        metaViewport.attr("content")?.toLowerCase() ?? "";

    const viewportIsMobileReady =
        viewportContent.includes("width=device-width");

    // ========================================
    // Touch Icon
    // ========================================

    const touchIconPresent =
        $('link[rel="apple-touch-icon"]').length > 0 ||
        $('link[rel="apple-touch-icon-precomposed"]').length > 0;

    // ========================================
    // Font Scaling
    // ========================================

    const fontScalingSupported =
        !viewportContent.includes("user-scalable=no") &&
        !viewportContent.includes("maximum-scale=1");

    // ========================================
    // Popup Detection (Heuristic)
    // ========================================

    const popupKeywords = [
        "popup",
        "modal",
        "overlay",
        "lightbox",
        "newsletter",
        "subscribe",
        "cookie",
        "consent",
        "dialog"
    ];

    const estimatedPopupPresence = $('[id],[class]')
        .toArray()
        .some((element) => {
            const id = $(element).attr("id") ?? "";
            const className = $(element).attr("class") ?? "";

            const value = `${id} ${className}`.toLowerCase();

            return popupKeywords.some((keyword) =>
                value.includes(keyword)
            );
        });

    // ========================================
    // Horizontal Scroll Risk (Heuristic)
    // ========================================

    let estimatedHorizontalScrollRisk = false;

    $('[style]').each((_, element) => {
        const style = $(element).attr("style") ?? "";

        const widthMatch =
            style.match(/width\s*:\s*(\d+)px/i);

        if (
            widthMatch &&
            Number(widthMatch[1]) > 1200
        ) {
            estimatedHorizontalScrollRisk = true;
        }
    });


    return {
        hasMetaViewport,
        viewportIsMobileReady,
        touchIconPresent,
        fontScalingSupported,
        estimatedPopupPresence,
        estimatedHorizontalScrollRisk,
    };
}