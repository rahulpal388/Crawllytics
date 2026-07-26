import { SEO_LIMITS } from "@/constants/seoLimits.js";
import { TitleAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { HTMLTitleType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";


export function analyzeTitle(title: HTMLTitleType[]): TitleAnalysis {
    const primaryTitle = title[0];

    const hasTitle = title.length > 0;

    const titleLengthChar = primaryTitle?.lengthChar ?? null;
    const titleLengthPixel = primaryTitle?.lengthPixel ?? null;

    return {
        hasTitle,

        titleCount: title.length,

        hasMultipleTitles: title.length > 1,

        emptyTitle: hasTitle
            ? title.some((t) => t.text.trim().length === 0)
            : false,

        duplicateTitle: false, // Filled during site analysis

        titleLengthChar,

        titleLengthPixel,

        titleTooShort:
            titleLengthChar !== null &&
            titleLengthChar < SEO_LIMITS.title.minLength,

        titleTooLong:
            titleLengthChar !== null &&
            titleLengthChar > SEO_LIMITS.title.maxLength,

        titleTooWide:
            titleLengthPixel !== null &&
            titleLengthPixel > SEO_LIMITS.title.maxPixelWidth,
    };
}