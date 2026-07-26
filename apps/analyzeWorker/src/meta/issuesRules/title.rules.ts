import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";
import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";

export const titleRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Existence
        // ===========================

        {
            code: "MISSING_TITLE",
            title: "Missing title tag",
            category: "metadata",
            severity: "critical",
            scoreImpact: 25,
            check: (data) => !data.title.hasTitle,
        },

        {
            code: "EMPTY_TITLE",
            title: "Title tag is empty",
            category: "metadata",
            severity: "critical",
            scoreImpact: 20,
            check: (data) => data.title.emptyTitle,
        },

        {
            code: "MULTIPLE_TITLES",
            title: "Multiple title tags detected",
            category: "metadata",
            severity: "high",
            scoreImpact: 15,
            check: (data) => data.title.hasMultipleTitles,
        },

        // ===========================
        // Duplicate
        // ===========================

        {
            code: "DUPLICATE_TITLE",
            title: "Duplicate title detected",
            category: "metadata",
            severity: "high",
            scoreImpact: 15,
            check: (data) => data.title.duplicateTitle,
        },

        // ===========================
        // Length
        // ===========================

        {
            code: "TITLE_TOO_SHORT",
            title: "Title is too short",
            category: "metadata",
            severity: "warning",
            scoreImpact: 8,
            check: (data) =>
                data.title.hasTitle &&
                !data.title.emptyTitle &&
                data.title.titleCount > 0 &&
                data.title.titleCount < 15,
        },

        {
            code: "TITLE_TOO_LONG",
            title: "Title is too long",
            category: "metadata",
            severity: "warning",
            scoreImpact: 8,
            check: (data) =>
                data.title.titleCount > 70,
        },

        // ===========================
        // Pixel Width
        // ===========================

        {
            code: "TITLE_PIXEL_TOO_WIDE",
            title: "Title exceeds recommended pixel width",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.title.titleCount > 60,
        },
    ];