import { HreflangAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { HreflangType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";



export function analyzeHreflang(
    hreflangs: HreflangType[]
): HreflangAnalysis {
    return {
        hasHreflang: hreflangs.length > 0,

        hreflangCount: hreflangs.length,

        hasDefaultHreflang: hreflangs.some(
            h => h.isDefault
        ),

        hasReturnHreflang: hreflangs.some(
            h => h.isReturn
        ),

        hasValidLanguageCodes:
            hreflangs.every(h => h.isValidLanguage),

        hasInvalidLanguageCodes:
            hreflangs.some(h => !h.isValidLanguage),

        hasAbsoluteHreflangUrls:
            hreflangs.every(h => h.isAbsoluteUrl),

        hasRelativeHreflangUrls:
            hreflangs.some(h => !h.isAbsoluteUrl),

        hasBrokenHreflangUrls:
            hreflangs.some(
                h =>
                    h.hrefStatusCode !== null &&
                    h.hrefStatusCode >= 400
            ),
    };
}