
import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const twitterCardRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Existence
        // ===========================

        {
            code: "MISSING_TWITTER_CARD",
            title: "Missing Twitter Card metadata",
            category: "metadata",
            severity: "low",
            scoreImpact: 3,
            check: (data) => !data.twitterCard.hasTwitterCard,
        },

        // ===========================
        // Required Properties
        // ===========================

        {
            code: "MISSING_TWITTER_CARD_TYPE",
            title: "Missing twitter:card",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.twitterCard.hasTwitterCard &&
                !data.twitterCard.hasTwitterCardType,
        },

        {
            code: "MISSING_TWITTER_TITLE",
            title: "Missing twitter:title",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.twitterCard.hasTwitterCard &&
                !data.twitterCard.hasTwitterTitle,
        },

        {
            code: "MISSING_TWITTER_DESCRIPTION",
            title: "Missing twitter:description",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.twitterCard.hasTwitterCard &&
                !data.twitterCard.hasTwitterDescription,
        },

        {
            code: "MISSING_TWITTER_IMAGE",
            title: "Missing twitter:image",
            category: "metadata",
            severity: "warning",
            scoreImpact: 8,
            check: (data) =>
                data.twitterCard.hasTwitterCard &&
                !data.twitterCard.hasTwitterImage,
        },

        // ===========================
        // Recommended Properties
        // ===========================

        {
            code: "MISSING_TWITTER_SITE",
            title: "Missing twitter:site",
            category: "metadata",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.twitterCard.hasTwitterCard &&
                !data.twitterCard.hasTwitterSite,
        },

        {
            code: "MISSING_TWITTER_CREATOR",
            title: "Missing twitter:creator",
            category: "metadata",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.twitterCard.hasTwitterCard &&
                !data.twitterCard.hasTwitterCreator,
        },

        // ===========================
        // Player Card
        // ===========================

        {
            code: "MISSING_TWITTER_PLAYER",
            title: "Missing twitter:player",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) =>
                data.twitterCard.hasTwitterPlayer &&
                !data.twitterCard.hasTwitterPlayer,
        },
    ];