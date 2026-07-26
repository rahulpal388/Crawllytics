import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const brandingRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Site Name
        // ===========================

        {
            code: "MISSING_SITE_NAME",
            title: "Missing site name",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.branding.hasSiteName,
        },

        // ===========================
        // Favicon
        // ===========================

        {
            code: "MISSING_FAVICON",
            title: "Missing favicon",
            category: "metadata",
            severity: "low",
            scoreImpact: 3,
            check: (data) => !data.branding.hasFavicon,
        },

        {
            code: "MULTIPLE_FAVICONS",
            title: "Multiple favicons detected",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => data.branding.faviconCount > 1,
        },
    ];