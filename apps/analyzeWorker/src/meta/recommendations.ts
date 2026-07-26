import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { MetaIssueCode, META_ISSUE_CODES } from "@/meta/issuesCode.js";
import { ALTERNATE_RECOMMENDATIONS } from "@/meta/recommendations/alternate.recommendation.js";
import { BRANDING_RECOMMENDATIONS } from "@/meta/recommendations/branding.recommendation.js";
import { CANONICAL_RECOMMENDATIONS } from "@/meta/recommendations/canonical.recommendation.js";
import { HREFLANG_RECOMMENDATIONS } from "@/meta/recommendations/hreflang.recommendation.js";
import { MANIFEST_RECOMMENDATIONS } from "@/meta/recommendations/manifest.recommendation.js";
import { META_DESCRIPTION_RECOMMENDATIONS } from "@/meta/recommendations/metaDescriptions.recommendation.js";
import { META_ROBOTS_RECOMMENDATIONS } from "@/meta/recommendations/metaRobots.recommendation.js";
import { OPEN_GRAPH_RECOMMENDATIONS } from "@/meta/recommendations/openGraph.recommendation.js";
import { RESOURCE_HINTS_RECOMMENDATIONS } from "@/meta/recommendations/resourceHint.recommendations.js";
import { TITLE_RECOMMENDATIONS } from "@/meta/recommendations/title.recommendation.js";
import { TWITTER_CARD_RECOMMENDATIONS } from "@/meta/recommendations/twitterCard.recommendation.js";
import { VIEWPORT_RECOMMENDATIONS } from "@/meta/recommendations/viewports.recommendation.js";
import { RecommendationType } from "@repo/config/types/analysesTypes/recommendationTypes";

export const metaRecommendations: Record<
    MetaIssueCode,
    RecommendationType
> = {
    ...TITLE_RECOMMENDATIONS,
    ...META_DESCRIPTION_RECOMMENDATIONS,
    ...META_ROBOTS_RECOMMENDATIONS,
    ...CANONICAL_RECOMMENDATIONS,
    ...OPEN_GRAPH_RECOMMENDATIONS,
    ...TWITTER_CARD_RECOMMENDATIONS,
    ...VIEWPORT_RECOMMENDATIONS,
    ...HREFLANG_RECOMMENDATIONS,
    ...ALTERNATE_RECOMMENDATIONS,
    ...BRANDING_RECOMMENDATIONS,
    ...RESOURCE_HINTS_RECOMMENDATIONS,
    ...MANIFEST_RECOMMENDATIONS

} as const;