import { BrandingAnalysis } from "@repo/contract/types/analysesTypes/perPages/pageMeta";
import { FaviconType } from "@repo/contract/types/urlInformationType/htmlHeaderResponseTypes";

export function analyzeBranding(
  siteName: string | null,
  favicons: FaviconType[],
): BrandingAnalysis {
  return {
    hasSiteName: siteName !== null && siteName.trim().length > 0,

    hasFavicon: favicons.length > 0,

    faviconCount: favicons.length,
  };
}
