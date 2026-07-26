

import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const openGraphRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Existence
        // ===========================

        {
            code: "MISSING_OPEN_GRAPH",
            title: "Missing Open Graph metadata",
            category: "metadata",
            severity: "low",
            scoreImpact: 3,
            check: (data) => !data.openGraph.hasOpenGraph,
        },

        // ===========================
        // Required Properties
        // ===========================

        {
            code: "MISSING_OG_TITLE",
            title: "Missing og:title",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgTitle,
        },

        {
            code: "MISSING_OG_DESCRIPTION",
            title: "Missing og:description",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgDescription,
        },

        {
            code: "MISSING_OG_IMAGE",
            title: "Missing og:image",
            category: "metadata",
            severity: "warning",
            scoreImpact: 8,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgImage,
        },

        {
            code: "MISSING_OG_URL",
            title: "Missing og:url",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgUrl,
        },

        {
            code: "MISSING_OG_TYPE",
            title: "Missing og:type",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgType,
        },

        // ===========================
        // Recommended Properties
        // ===========================

        {
            code: "MISSING_OG_SITE_NAME",
            title: "Missing og:site_name",
            category: "metadata",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgSiteName,
        },

        {
            code: "MISSING_OG_LOCALE",
            title: "Missing og:locale",
            category: "metadata",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgLocale,
        },

        // ===========================
        // Optional Media
        // ===========================

        {
            code: "MISSING_OG_VIDEO",
            title: "Missing og:video",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgVideo,
        },

        {
            code: "MISSING_OG_AUDIO",
            title: "Missing og:audio",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) =>
                data.openGraph.hasOpenGraph &&
                !data.openGraph.hasOgAudio,
        },
    ];