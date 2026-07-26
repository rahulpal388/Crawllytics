import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const metaDescriptionRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Existence
        // ===========================

        {
            code: "MISSING_META_DESCRIPTION",
            title: "Missing meta description",
            category: "metadata",
            severity: "high",
            scoreImpact: 20,
            check: (data) => !data.metaDescription.hasMetaDescription,
        },

        {
            code: "EMPTY_META_DESCRIPTION",
            title: "Meta description is empty",
            category: "metadata",
            severity: "high",
            scoreImpact: 15,
            check: (data) => data.metaDescription.emptyMetaDescription,
        },

        {
            code: "MULTIPLE_META_DESCRIPTIONS",
            title: "Multiple meta descriptions detected",
            category: "metadata",
            severity: "warning",
            scoreImpact: 10,
            check: (data) => data.metaDescription.hasMultipleMetaDescriptions,
        },

        // ===========================
        // Duplicate
        // ===========================

        {
            code: "DUPLICATE_META_DESCRIPTION",
            title: "Duplicate meta description detected",
            category: "metadata",
            severity: "warning",
            scoreImpact: 10,
            check: (data) => data.metaDescription.duplicateMetaDescription,
        },

        // ===========================
        // Length
        // ===========================

        {
            code: "META_DESCRIPTION_TOO_SHORT",
            title: "Meta description is too short",
            category: "metadata",
            severity: "warning",
            scoreImpact: 8,
            check: (data) => data.metaDescription.metaDescriptionTooShort,
        },

        {
            code: "META_DESCRIPTION_TOO_LONG",
            title: "Meta description is too long",
            category: "metadata",
            severity: "warning",
            scoreImpact: 8,
            check: (data) => data.metaDescription.metaDescriptionTooLong,
        },

        // ===========================
        // Pixel Width
        // ===========================

        {
            code: "META_DESCRIPTION_PIXEL_TOO_WIDE",
            title: "Meta description exceeds recommended pixel width",
            category: "metadata",
            severity: "low",
            scoreImpact: 5,
            check: (data) => data.metaDescription.metaDescriptionTooWide,
        },
    ];