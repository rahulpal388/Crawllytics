import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";

export const HREFLANG_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_HREFLANG]: {
        title: "Missing hreflang annotations",
        description: "The page does not define any hreflang annotations.",
        whyItMatters:
            "Hreflang helps search engines serve the correct language or regional version of a page to users.",
        howToFix: [
            "Add hreflang annotations for each language or regional version of the page.",
            "Ensure every alternate version references all other language variants.",
            "Use hreflang only when multiple language or regional versions exist."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_HREFLANG
        ]
    },

    [META_ISSUE_CODES.MULTIPLE_HREFLANG]: {
        title: "Duplicate hreflang annotations",
        description: "The page contains duplicate hreflang entries.",
        whyItMatters:
            "Duplicate hreflang annotations increase complexity and may result in inconsistent language targeting.",
        howToFix: [
            "Remove duplicate hreflang entries.",
            "Keep only one annotation for each language or region.",
            "Validate the generated HTML for duplicates."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_HREFLANG
        ]
    },

    [META_ISSUE_CODES.INVALID_HREFLANG_CODE]: {
        title: "Invalid hreflang code",
        description: "One or more hreflang values use invalid language or locale codes.",
        whyItMatters:
            "Invalid hreflang codes are ignored by search engines, preventing proper language targeting.",
        howToFix: [
            "Use valid ISO 639-1 language codes.",
            "Use valid ISO 3166-1 Alpha-2 region codes when specifying a region.",
            "Validate all hreflang values before deployment."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_HREFLANG
        ]
    },

    [META_ISSUE_CODES.MISSING_X_DEFAULT]: {
        title: "Missing x-default hreflang",
        description: "No x-default hreflang annotation was found.",
        whyItMatters:
            "The x-default value helps search engines determine which page to serve when no language or regional match exists.",
        howToFix: [
            "Add an hreflang=\"x-default\" annotation.",
            "Point it to your global landing page or language selector.",
            "Ensure it is included alongside other hreflang annotations."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_HREFLANG
        ]
    },

    [META_ISSUE_CODES.MISSING_HREFLANG_RETURN_LINK]: {
        title: "Missing reciprocal hreflang links",
        description: "One or more alternate pages do not link back to this page using hreflang.",
        whyItMatters:
            "Google expects hreflang annotations to be reciprocal. Missing return links may cause the annotations to be ignored.",
        howToFix: [
            "Ensure every alternate page references this page.",
            "Verify that hreflang annotations are bidirectional.",
            "Keep all language variants synchronized."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_HREFLANG
        ]
    },

    [META_ISSUE_CODES.RELATIVE_HREFLANG_URL]: {
        title: "Relative hreflang URL",
        description: "One or more hreflang annotations use relative URLs.",
        whyItMatters:
            "Absolute URLs are recommended to avoid ambiguity and ensure consistent interpretation by search engines.",
        howToFix: [
            "Use absolute HTTPS URLs in all hreflang annotations.",
            "Verify each URL resolves correctly."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_HREFLANG
        ]
    },

    [META_ISSUE_CODES.BROKEN_HREFLANG_URL]: {
        title: "Broken hreflang URL",
        description: "One or more hreflang URLs return an error or cannot be reached.",
        whyItMatters:
            "Broken alternate URLs prevent search engines from validating language relationships between pages.",
        howToFix: [
            "Update hreflang URLs to valid, accessible pages.",
            "Fix redirects or server errors.",
            "Regularly validate all hreflang destinations."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_HREFLANG
        ]
    }
} as const;