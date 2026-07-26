import { CanonicalAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { HTMLCanonicalType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function analyzeCanonical(
    canonicals: HTMLCanonicalType[]
): CanonicalAnalysis {
    return {
        hasCanonical: canonicals.length > 0,
        canonicalCount: canonicals.length,
        hasMultipleCanonicals: canonicals.length > 1,

        hasSelfCanonical: canonicals.some(c => c.isSelf),
        hasCrossPageCanonical: canonicals.some(c => c.isCrossPage),
        hasCrossDomainCanonical: canonicals.some(c => c.isCrossDomain),

        hasAbsoluteCanonical: canonicals.some(c => c.isAbsoluteUrl),
        hasRelativeCanonical: canonicals.some(c => c.isRelativeUrl),

        hasHttpsCanonical: canonicals.some(c => c.isHttps),
        hasInvalidCanonical: canonicals.some(c => !c.isValidUrl),
    };
}