import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const hreflangRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Existence
        // ===========================

        {
            code: "MISSING_HREFLANG",
            title: "Missing hreflang annotations",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.hreflang.hasHreflang,
        },

        {
            code: "MULTIPLE_HREFLANG",
            title: "Multiple hreflang annotations detected",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.hreflang.hreflangCount > 1,
        },

        // ===========================
        // Language Codes
        // ===========================

        {
            code: "INVALID_HREFLANG_CODE",
            title: "Invalid hreflang language code",
            category: "metadata",
            severity: "high",
            scoreImpact: 10,
            check: (data) => data.hreflang.hasInvalidLanguageCodes,
        },

        // ===========================
        // x-default
        // ===========================

        {
            code: "MISSING_X_DEFAULT",
            title: "Missing x-default hreflang",
            category: "metadata",
            severity: "low",
            scoreImpact: 3,
            check: (data) =>
                data.hreflang.hasHreflang &&
                !data.hreflang.hasDefaultHreflang,
        },

        // ===========================
        // Return Links
        // ===========================

        {
            code: "MISSING_HREFLANG_RETURN_LINK",
            title: "Missing reciprocal hreflang return link",
            category: "metadata",
            severity: "warning",
            scoreImpact: 8,
            check: (data) =>
                data.hreflang.hasHreflang &&
                !data.hreflang.hasReturnHreflang,
        },

        // ===========================
        // URLs
        // ===========================

        {
            code: "RELATIVE_HREFLANG_URL",
            title: "Relative hreflang URL detected",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.hreflang.hasRelativeHreflangUrls,
        },

        {
            code: "BROKEN_HREFLANG_URL",
            title: "Broken hreflang URL detected",
            category: "metadata",
            severity: "high",
            scoreImpact: 10,
            check: (data) => data.hreflang.hasBrokenHreflangUrls,
        },
    ];