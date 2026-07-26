import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const manifestRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        {
            code: "MISSING_WEB_MANIFEST",
            title: "Missing Web App Manifest",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.manifest.hasManifest,
        },
    ];