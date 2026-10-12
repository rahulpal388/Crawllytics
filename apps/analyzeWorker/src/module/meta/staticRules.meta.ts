import { MetaRuleId, META_RULE_IDS } from "@/module/meta/ruleId.meta.js";
import { SEORules } from "@repo/contracts/types/analysesTypes/SEORules.Type";


type MetaStaticRuleRegistry = {
    [K in MetaRuleId]: SEORules<K>;
};




export const metaStaticRules: MetaStaticRuleRegistry = {
    [META_RULE_IDS.META_001_TITLE_MISSING]: {
        ruleId: META_RULE_IDS.META_001_TITLE_MISSING,
        name: "Missing title",
        description: "The page does not have a title element.",
        whyItMatters:
            "A descriptive title helps search engines and users understand the page.",
        recommendation: {
            description: "Add a meaningful title element to the page.",
            steps: [
                "Identify the main topic of the page.",
                "Write a unique, descriptive title.",
                "Add the title inside the HTML head.",
            ],
        },
        howToFix: null,
        fix: "Add a non-empty <title>Page title</title> element inside the document head.",
    },

    [META_RULE_IDS.META_002_TITLE_EMPTY]: {
        ruleId: META_RULE_IDS.META_002_TITLE_EMPTY,
        name: "Empty title",
        description: "The title element exists, but its text is empty.",
        whyItMatters:
            "An empty title provides no useful page context to search engines or users.",
        recommendation: {
            description: "Populate the title element with relevant text.",
            steps: [
                "Find the empty title element.",
                "Write a concise title that describes the page.",
                "Verify that the title contains meaningful text.",
            ],
        },
        howToFix: null,
        fix: "Replace the empty title element with a descriptive page title.",
    },

    [META_RULE_IDS.META_003_TITLE_MULTIPLE]: {
        ruleId: META_RULE_IDS.META_003_TITLE_MULTIPLE,
        name: "Multiple title tags",
        description: "The page contains more than one title element.",
        whyItMatters:
            "Multiple title elements can create ambiguity about the intended page title.",
        recommendation: {
            description: "Keep one authoritative title element per page.",
            steps: [
                "Inspect the HTML head for all title elements.",
                "Identify which title accurately describes the page.",
                "Remove duplicate title elements.",
            ],
        },
        howToFix: null,
        fix: "Remove duplicate title elements and retain one descriptive title.",
    },

    [META_RULE_IDS.META_004_TITLE_TOO_SHORT]: {
        ruleId: META_RULE_IDS.META_004_TITLE_TOO_SHORT,
        name: "Title too short",
        description: "The title contains fewer than 15 characters.",
        whyItMatters:
            "A very short title may not communicate enough information about the page.",
        recommendation: {
            description: "Expand the title to describe the page more clearly.",
            steps: [
                "Review the page's main subject.",
                "Include the most important descriptive terms naturally.",
                "Avoid adding irrelevant keywords just to increase length.",
            ],
        },
        howToFix: null,
        fix: "Rewrite the title to provide useful context. The 15-character threshold is a heuristic, not a search-engine requirement.",
    },

    [META_RULE_IDS.META_005_TITLE_TOO_LONG]: {
        ruleId: META_RULE_IDS.META_005_TITLE_TOO_LONG,
        name: "Title too long",
        description: "The title exceeds 60 characters.",
        whyItMatters:
            "Long titles may be truncated in search results and can obscure the main topic.",
        recommendation: {
            description: "Make the title concise while retaining its key meaning.",
            steps: [
                "Put the main topic near the beginning.",
                "Remove unnecessary repetition and filler.",
                "Review the rendered title in search-result previews.",
            ],
        },
        howToFix: null,
        fix: "Shorten the title where possible. Sixty characters is a guideline, not a strict search-engine limit.",
    },

    [META_RULE_IDS.META_006_DESCRIPTION_MISSING]: {
        ruleId: META_RULE_IDS.META_006_DESCRIPTION_MISSING,
        name: "Missing meta description",
        description: "The page does not have a meta description.",
        whyItMatters:
            "A meta description can provide a useful summary for search-result snippets, although search engines may generate their own.",
        recommendation: {
            description: "Add a relevant meta description for the page.",
            steps: [
                "Summarize the page's primary content.",
                "Write a unique description that helps users understand the page.",
                "Add it as a meta description element in the document head.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta name="description" content="A useful page summary"> to the document head.',
    },

    [META_RULE_IDS.META_007_DESCRIPTION_EMPTY]: {
        ruleId: META_RULE_IDS.META_007_DESCRIPTION_EMPTY,
        name: "Empty meta description",
        description: "The meta description exists but contains no meaningful text.",
        whyItMatters:
            "An empty description cannot provide a useful summary of the page.",
        recommendation: {
            description: "Write a meaningful description or remove the empty tag.",
            steps: [
                "Locate the empty meta description.",
                "Write a concise summary of the page.",
                "Ensure the description matches the page content.",
            ],
        },
        howToFix: null,
        fix: "Replace the empty description with useful text or remove the empty element.",
    },

    [META_RULE_IDS.META_008_DESCRIPTION_MULTIPLE]: {
        ruleId: META_RULE_IDS.META_008_DESCRIPTION_MULTIPLE,
        name: "Multiple meta descriptions",
        description: "The page contains more than one meta description.",
        whyItMatters:
            "Multiple descriptions can make it unclear which summary is intended.",
        recommendation: {
            description: "Keep one relevant meta description for the page.",
            steps: [
                "Inspect the document head for duplicate description tags.",
                "Choose the description that best summarizes the page.",
                "Remove redundant description tags.",
            ],
        },
        howToFix: null,
        fix: "Remove duplicate meta description elements and retain one appropriate description.",
    },

    [META_RULE_IDS.META_009_DESCRIPTION_TOO_SHORT]: {
        ruleId: META_RULE_IDS.META_009_DESCRIPTION_TOO_SHORT,
        name: "Meta description too short",
        description: "The meta description contains fewer than 70 characters.",
        whyItMatters:
            "A very short description may miss opportunities to explain the page's value to users.",
        recommendation: {
            description: "Expand the description with useful, page-specific information.",
            steps: [
                "Explain the main purpose of the page.",
                "Include relevant details that distinguish the page.",
                "Keep the wording natural and avoid keyword stuffing.",
            ],
        },
        howToFix: null,
        fix: "Improve the summary where useful. Seventy characters is a heuristic, not a search-engine requirement.",
    },

    [META_RULE_IDS.META_010_DESCRIPTION_TOO_LONG]: {
        ruleId: META_RULE_IDS.META_010_DESCRIPTION_TOO_LONG,
        name: "Meta description too long",
        description: "The meta description exceeds 160 characters.",
        whyItMatters:
            "Long descriptions may be truncated in search results, depending on the query and display context.",
        recommendation: {
            description: "Prioritize the most useful information in a concise summary.",
            steps: [
                "Put the page's main value proposition first.",
                "Remove repetition and unnecessary wording.",
                "Preview how the description may appear in search results.",
            ],
        },
        howToFix: null,
        fix: "Shorten the description where appropriate. One hundred sixty characters is a guideline, not a strict limit.",
    },

    [META_RULE_IDS.META_011_ROBOTS_NOINDEX]: {
        ruleId: META_RULE_IDS.META_011_ROBOTS_NOINDEX,
        name: "Noindex directive",
        description: "The meta robots directive contains noindex.",
        whyItMatters:
            "The noindex directive tells compliant search engines not to index the page.",
        recommendation: {
            description: "Confirm whether excluding this page from search results is intentional.",
            steps: [
                "Check whether the page should appear in search results.",
                "If it should be indexed, remove the unintended noindex directive.",
                "Verify that no other applicable indexing restrictions remain.",
            ],
        },
        howToFix: null,
        fix: "Remove the noindex directive only if the page is intended to be indexed.",
    },

    [META_RULE_IDS.META_012_ROBOTS_NOFOLLOW]: {
        ruleId: META_RULE_IDS.META_012_ROBOTS_NOFOLLOW,
        name: "Nofollow directive",
        description: "The meta robots directive contains nofollow.",
        whyItMatters:
            "The nofollow directive instructs compliant search engines not to follow links on the page.",
        recommendation: {
            description: "Check whether restricting link following is intentional.",
            steps: [
                "Review the purpose of the page.",
                "If link following should be allowed, remove the unintended nofollow directive.",
                "Check both page metadata and applicable HTTP headers.",
            ],
        },
        howToFix: null,
        fix: "Remove nofollow only when you intend to allow compliant search engines to follow links.",
    },

    [META_RULE_IDS.META_013_ROBOTS_CONFLICTING_DIRECTIVES]: {
        ruleId: META_RULE_IDS.META_013_ROBOTS_CONFLICTING_DIRECTIVES,
        name: "Conflicting robots directives",
        description:
            "The meta robots directives contain contradictory index or follow instructions.",
        whyItMatters:
            "Contradictory directives can make the intended crawling and indexing policy unclear.",
        recommendation: {
            description: "Remove conflicting directives and define one clear policy.",
            steps: [
                "Inspect all robots directives extracted from the page.",
                "Resolve index versus noindex conflicts.",
                "Resolve follow versus nofollow conflicts.",
                "Recheck applicable HTTP response headers separately.",
            ],
        },
        howToFix: null,
        fix: "Remove contradictory directives and retain the intended robots policy.",
    },

    [META_RULE_IDS.META_014_CANONICAL_MISSING]: {
        ruleId: META_RULE_IDS.META_014_CANONICAL_MISSING,
        name: "Missing canonical URL",
        description: "The page does not have a canonical link.",
        whyItMatters:
            "A canonical link can help search engines identify the preferred URL among duplicate or similar pages.",
        recommendation: {
            description: "Add a canonical link when a preferred URL should be specified.",
            steps: [
                "Determine the preferred URL for the page.",
                "Use an absolute URL for the canonical target.",
                "Add the canonical link inside the document head.",
            ],
        },
        howToFix: null,
        fix: 'Add <link rel="canonical" href="https://example.com/preferred-page"> using the actual preferred URL.',
    },

    [META_RULE_IDS.META_015_CANONICAL_MULTIPLE]: {
        ruleId: META_RULE_IDS.META_015_CANONICAL_MULTIPLE,
        name: "Multiple canonical URLs",
        description: "The page contains more than one canonical link.",
        whyItMatters:
            "Multiple canonical links can send unclear or conflicting signals about the preferred URL.",
        recommendation: {
            description: "Keep one canonical link that represents the preferred URL.",
            steps: [
                "Inspect all canonical link elements.",
                "Choose the intended canonical URL.",
                "Remove duplicate or conflicting canonical elements.",
            ],
        },
        howToFix: null,
        fix: "Remove duplicate canonical elements and retain one valid canonical link.",
    },

    [META_RULE_IDS.META_016_CANONICAL_INVALID]: {
        ruleId: META_RULE_IDS.META_016_CANONICAL_INVALID,
        name: "Invalid canonical URL",
        description: "At least one canonical URL is invalid.",
        whyItMatters:
            "An invalid canonical URL may prevent search engines from interpreting the preferred URL correctly.",
        recommendation: {
            description: "Correct the canonical URL and verify its syntax.",
            steps: [
                "Inspect the extracted canonical URL.",
                "Correct malformed URL syntax.",
                "Use the intended absolute URL.",
                "Verify the canonical link after updating the page.",
            ],
        },
        howToFix: null,
        fix: "Replace the invalid canonical URL with a syntactically valid URL for the preferred page.",
    },

    [META_RULE_IDS.META_017_CANONICAL_RELATIVE_URL]: {
        ruleId: META_RULE_IDS.META_017_CANONICAL_RELATIVE_URL,
        name: "Relative canonical URL",
        description: "The canonical link uses a relative URL instead of an absolute URL.",
        whyItMatters:
            "Absolute canonical URLs reduce ambiguity about the intended scheme, host, and path.",
        recommendation: {
            description: "Use the full absolute canonical URL.",
            steps: [
                "Resolve the relative URL against the page URL.",
                "Confirm the intended protocol and hostname.",
                "Set the canonical href to the complete absolute URL.",
            ],
        },
        howToFix: null,
        fix: 'Replace the relative canonical href with an absolute URL such as <link rel="canonical" href="https://example.com/page">.',
    },

    [META_RULE_IDS.META_018_VIEWPORT_MISSING]: {
        ruleId: META_RULE_IDS.META_018_VIEWPORT_MISSING,
        name: "Missing viewport meta tag",
        description: "The page does not have a viewport meta tag.",
        whyItMatters:
            "Without a viewport declaration, mobile browsers may render the page using a wider layout viewport.",
        recommendation: {
            description: "Configure the viewport for responsive layouts.",
            steps: [
                "Check whether the page is intended to support mobile devices.",
                "Add a viewport meta element to the document head.",
                "Test the layout at different screen widths.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1"> to the document head.',
    },

    [META_RULE_IDS.META_019_VIEWPORT_INVALID]: {
        ruleId: META_RULE_IDS.META_019_VIEWPORT_INVALID,
        name: "Invalid viewport configuration",
        description: "The viewport width or scale contains an invalid value.",
        whyItMatters:
            "Invalid viewport values can interfere with the intended responsive layout.",
        recommendation: {
            description: "Correct invalid width and scale values.",
            steps: [
                "Inspect the viewport content attributes.",
                "Use device-width or a valid positive width.",
                "Use valid positive scale values.",
                "Test the page on mobile screen sizes.",
            ],
        },
        howToFix: null,
        fix: 'Use a valid viewport declaration such as <meta name="viewport" content="width=device-width, initial-scale=1">.',
    },

    [META_RULE_IDS.META_020_VIEWPORT_ZOOM_RESTRICTED]: {
        ruleId: META_RULE_IDS.META_020_VIEWPORT_ZOOM_RESTRICTED,
        name: "Viewport zoom restricted",
        description:
            "The viewport disables user zoom or restricts maximum zoom to 1 or less.",
        whyItMatters:
            "Restricting zoom can prevent users with low vision from enlarging page content.",
        recommendation: {
            description: "Allow users to zoom in when viewing the page.",
            steps: [
                "Remove user-scalable=no if present.",
                "Avoid restricting maximum-scale to 1 or less.",
                "Test zoom functionality on mobile devices.",
            ],
        },
        howToFix: null,
        fix: "Allow user zoom by removing restrictive viewport settings while preserving responsive layout behavior.",
    },

    [META_RULE_IDS.META_021_ROBOTS_HEADER_CONFLICT]: {
        ruleId: META_RULE_IDS.META_021_ROBOTS_HEADER_CONFLICT,
        name: "Robots header conflict",
        description:
            "The meta robots and X-Robots-Tag directives contradict each other.",
        whyItMatters:
            "Conflicting HTML and HTTP robots directives make the intended indexing and link-following policy difficult to interpret.",
        recommendation: {
            description: "Align the page's meta robots directives with its X-Robots-Tag response headers.",
            steps: [
                "Inspect the meta robots directives.",
                "Inspect the X-Robots-Tag response header.",
                "Resolve index versus noindex conflicts.",
                "Resolve follow versus nofollow conflicts.",
                "Re-fetch the page and verify the final directives.",
            ],
        },
        howToFix: null,
        fix: "Update the HTML metadata or HTTP response headers so their robots directives express a consistent policy.",
    },
};
