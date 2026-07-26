import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";

export const RESOURCE_HINTS_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_DNS_PREFETCH]: {
        title: "Missing DNS prefetch",
        description: "The page does not use dns-prefetch for external domains.",
        whyItMatters:
            "DNS prefetch allows browsers to resolve domain names before resources are requested, reducing latency for third-party resources.",
        howToFix: [
            "Add <link rel=\"dns-prefetch\"> for important third-party domains.",
            "Use DNS prefetch only for domains that are likely to be requested.",
            "Avoid prefetching unnecessary domains."
        ],
        documentationLinks: [
            META_DOCUMENTATION.WEB_DEV_RESOURCE_HINTS
        ]
    },

    [META_ISSUE_CODES.MISSING_PRECONNECT]: {
        title: "Missing preconnect",
        description: "The page does not establish early connections to critical external origins.",
        whyItMatters:
            "Preconnect reduces connection setup time by performing DNS lookup, TCP, and TLS negotiation before resources are requested.",
        howToFix: [
            "Add <link rel=\"preconnect\"> for critical third-party origins.",
            "Limit preconnect to the most important external services.",
            "Include crossorigin when required."
        ],
        documentationLinks: [
            META_DOCUMENTATION.WEB_DEV_RESOURCE_HINTS
        ]
    },

    [META_ISSUE_CODES.MISSING_PRELOAD]: {
        title: "Missing preload",
        description: "The page does not preload critical resources.",
        whyItMatters:
            "Preloading allows browsers to prioritize important resources such as fonts, stylesheets, hero images, and scripts, improving loading performance.",
        howToFix: [
            "Preload only critical resources needed during initial rendering.",
            "Specify the correct 'as' attribute.",
            "Avoid preloading resources that are not immediately required."
        ],
        documentationLinks: [
            META_DOCUMENTATION.WEB_DEV_RESOURCE_HINTS
        ]
    },

    [META_ISSUE_CODES.MISSING_PREFETCH]: {
        title: "Missing prefetch",
        description: "The page does not prefetch resources that are likely to be needed for future navigation.",
        whyItMatters:
            "Prefetch can improve perceived performance by downloading resources before users navigate to the next page.",
        howToFix: [
            "Prefetch resources that are likely to be used on the next navigation.",
            "Avoid prefetching large or rarely used assets.",
            "Use prefetch only when it benefits the user experience."
        ],
        documentationLinks: [
            META_DOCUMENTATION.WEB_DEV_RESOURCE_HINTS
        ]
    },

    [META_ISSUE_CODES.MISSING_MODULE_PRELOAD]: {
        title: "Missing modulepreload",
        description: "The page does not preload JavaScript modules.",
        whyItMatters:
            "modulepreload allows browsers to fetch ES modules earlier, reducing delays before module execution.",
        howToFix: [
            "Use <link rel=\"modulepreload\"> for critical JavaScript modules.",
            "Preload only modules required during the initial page load.",
            "Avoid preloading non-critical modules."
        ],
        documentationLinks: [
            META_DOCUMENTATION.WEB_DEV_RESOURCE_HINTS
        ]
    }
} as const;