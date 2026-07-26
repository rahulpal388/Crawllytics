import { MetaIssueCode } from "@/meta/issuesCode.js";
import { RulesType } from "@/types/rulesType.js";
import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";

export const alternateRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        {
            code: "MISSING_ALTERNATE",
            title: "Missing alternate link",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.alternate.hasAlternate,
        },

        {
            code: "MULTIPLE_ALTERNATE",
            title: "Multiple alternate links detected",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.alternate.alternateCount > 1,
        },
    ];