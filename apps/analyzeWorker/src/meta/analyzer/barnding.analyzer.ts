import { BrandingAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { FaviconType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";



export function analyzeBranding(
    siteName: string | null,
    favicons: FaviconType[]
): BrandingAnalysis {
    return {
        hasSiteName:
            siteName !== null &&
            siteName.trim().length > 0,

        hasFavicon: favicons.length > 0,

        faviconCount: favicons.length,
    };
}