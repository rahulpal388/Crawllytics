import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const canonicalRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Existence
        // ===========================

        {
            code: "MISSING_CANONICAL",
            title: "Missing canonical tag",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => !data.canonical.hasCanonical,
        },

        {
            code: "MULTIPLE_CANONICALS",
            title: "Multiple canonical tags detected",
            category: "metadata",
            severity: "high",
            scoreImpact: 10,
            check: (data) => data.canonical.hasMultipleCanonicals,
        },

        // ===========================
        // URL Validation
        // ===========================

        {
            code: "INVALID_CANONICAL",
            title: "Canonical URL is invalid",
            category: "metadata",
            severity: "high",
            scoreImpact: 15,
            check: (data) => data.canonical.hasInvalidCanonical,
        },

        {
            code: "RELATIVE_CANONICAL",
            title: "Canonical URL is relative",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.canonical.hasRelativeCanonical,
        },

        {
            code: "NON_HTTPS_CANONICAL",
            title: "Canonical URL does not use HTTPS",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.canonical.hasCanonical &&
                !data.canonical.hasHttpsCanonical,
        },

        // ===========================
        // Target
        // ===========================

        {
            code: "CANONICAL_TO_EXTERNAL_DOMAIN",
            title: "Canonical points to another domain",
            category: "metadata",
            severity: "high",
            scoreImpact: 10,
            check: (data) => data.canonical.hasCrossDomainCanonical,
        },

        {
            code: "CANONICAL_TO_DIFFERENT_PAGE",
            title: "Canonical points to a different page",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.canonical.hasCrossPageCanonical,
        },
    ];