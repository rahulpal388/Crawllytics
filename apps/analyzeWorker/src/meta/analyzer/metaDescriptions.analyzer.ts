import { SEO_LIMITS } from "@/constants/seoLimits.js";
import { MetaDescriptionAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { HTMLMetaDescriptionType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export function analyzeMetaDescription(
    metaDescriptions: HTMLMetaDescriptionType[]
): MetaDescriptionAnalysis {
    const primaryMetaDescription = metaDescriptions[0];

    const hasMetaDescription = metaDescriptions.length > 0;

    const metaDescriptionLengthChar =
        primaryMetaDescription?.lengthChar ?? null;

    const metaDescriptionLengthPixel =
        primaryMetaDescription?.lengthPixel ?? null;

    return {
        hasMetaDescription,

        metaDescriptionCount: metaDescriptions.length,

        hasMultipleMetaDescriptions:
            metaDescriptions.length > 1,

        emptyMetaDescription: hasMetaDescription
            ? metaDescriptions.some(
                (description) => description.text.trim().length === 0
            )
            : false,

        duplicateMetaDescription: false, // Filled during site-wide analysis

        metaDescriptionLengthChar,

        metaDescriptionLengthPixel,

        metaDescriptionTooShort:
            metaDescriptionLengthChar !== null &&
            metaDescriptionLengthChar <
            SEO_LIMITS.metaDescription.minLength,

        metaDescriptionTooLong:
            metaDescriptionLengthChar !== null &&
            metaDescriptionLengthChar >
            SEO_LIMITS.metaDescription.maxLength,

        metaDescriptionTooWide:
            metaDescriptionLengthPixel !== null &&
            metaDescriptionLengthPixel >
            SEO_LIMITS.metaDescription.maxPixelWidth,
    };
}