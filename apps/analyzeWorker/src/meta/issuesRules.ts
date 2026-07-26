import { MetaIssueCode } from "@/meta/issuesCode.js";
import { alternateRules } from "@/meta/issuesRules/alternate.rules.js";
import { brandingRules } from "@/meta/issuesRules/branding.rules.js";
import { canonicalRules } from "@/meta/issuesRules/canonical.rules.js";
import { hreflangRules } from "@/meta/issuesRules/hrefLang.rules.js";
import { manifestRules } from "@/meta/issuesRules/manifest.rules.js";
import { metaDescriptionRules } from "@/meta/issuesRules/metaDescriptions.rule.js";
import { metaRobotsRules } from "@/meta/issuesRules/metaRobots.rules.js";
import { openGraphRules } from "@/meta/issuesRules/openGraph.rules.js";
import { resourceHintsRules } from "@/meta/issuesRules/resourceHint.rules.js";
import { titleRules } from "@/meta/issuesRules/title.rules.js";
import { twitterCardRules } from "@/meta/issuesRules/twitterCard.rules.js";
import { viewportRules } from "@/meta/issuesRules/viewPorts.rules.js";
import { RulesType } from "@/types/rulesType.js";
import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";

export const metaIssuesRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        ...titleRules,
        ...metaDescriptionRules,
        ...metaRobotsRules,
        ...canonicalRules,
        ...openGraphRules,
        ...twitterCardRules,
        ...viewportRules,
        ...hreflangRules,
        ...alternateRules,
        ...brandingRules,
        ...resourceHintsRules,
        ...manifestRules
    ];