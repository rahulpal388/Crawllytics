import { AlternateAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { HTMLAlternateType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function analyzeAlternate(
    alternates: HTMLAlternateType[]
): AlternateAnalysis {
    return {
        hasAlternate: alternates.length > 0,
        alternateCount: alternates.length,
    };
}