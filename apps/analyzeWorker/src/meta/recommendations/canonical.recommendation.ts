import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";


export const CANONICAL_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_CANONICAL]: {
        title: "Missing canonical tag",
        description: "The page does not contain a canonical link element.",
        whyItMatters:
            "Canonical tags help search engines identify the preferred version of a page and consolidate ranking signals across duplicate or similar URLs.",
        howToFix: [
            "Add a <link rel=\"canonical\"> element to the page.",
            "Point the canonical URL to the preferred version of the page.",
            "Use a fully qualified HTTPS URL whenever possible."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_CANONICALIZATION
        ]
    },

    [META_ISSUE_CODES.MULTIPLE_CANONICALS]: {
        title: "Multiple canonical tags detected",
        description: "The page contains more than one canonical tag.",
        whyItMatters:
            "Multiple canonical tags can send conflicting signals to search engines and reduce confidence in the preferred URL.",
        howToFix: [
            "Keep only one canonical tag per page.",
            "Remove duplicate canonical elements.",
            "Ensure templates and JavaScript do not generate multiple canonicals."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_CANONICALIZATION
        ]
    },

    [META_ISSUE_CODES.INVALID_CANONICAL]: {
        title: "Invalid canonical URL",
        description: "The canonical URL is malformed or cannot be interpreted correctly.",
        whyItMatters:
            "Invalid canonical URLs may be ignored by search engines, causing duplicate content and indexing issues.",
        howToFix: [
            "Use a valid absolute URL.",
            "Ensure the canonical URL is properly formatted.",
            "Remove invalid characters or malformed syntax."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_CANONICALIZATION
        ]
    },

    [META_ISSUE_CODES.RELATIVE_CANONICAL]: {
        title: "Relative canonical URL",
        description: "The canonical tag uses a relative URL.",
        whyItMatters:
            "Although Google supports relative canonicals, absolute URLs are recommended to avoid ambiguity across environments.",
        howToFix: [
            "Use an absolute HTTPS URL in the canonical tag.",
            "Ensure the canonical points to the preferred page."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_CANONICALIZATION
        ]
    },

    [META_ISSUE_CODES.NON_HTTPS_CANONICAL]: {
        title: "Canonical points to a non-HTTPS URL",
        description: "The canonical URL uses HTTP instead of HTTPS.",
        whyItMatters:
            "If your website supports HTTPS, canonical URLs should also use HTTPS to avoid inconsistent indexing signals.",
        howToFix: [
            "Update the canonical URL to use HTTPS.",
            "Ensure HTTPS is the preferred version of the page.",
            "Redirect HTTP requests to HTTPS where appropriate."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_CANONICALIZATION
        ]
    },

    [META_ISSUE_CODES.CANONICAL_TO_EXTERNAL_DOMAIN]: {
        title: "Canonical points to another domain",
        description: "The canonical URL references a different domain.",
        whyItMatters:
            "Cross-domain canonicals should only be used intentionally. Incorrect usage may cause search engines to attribute ranking signals to another website.",
        howToFix: [
            "Verify that the external canonical is intentional.",
            "Update the canonical to reference the correct preferred URL.",
            "Use cross-domain canonicals only when duplicate content exists across owned domains."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_CANONICALIZATION
        ]
    },

    [META_ISSUE_CODES.CANONICAL_TO_DIFFERENT_PAGE]: {
        title: "Canonical points to a different page",
        description: "The canonical URL does not reference the current page.",
        whyItMatters:
            "Search engines may ignore the current page and consolidate ranking signals with the canonical destination.",
        howToFix: [
            "Verify the canonical target is intentional.",
            "Use a self-referencing canonical if this page should be indexed independently.",
            "Ensure the canonical reflects the preferred version of the content."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_CANONICALIZATION
        ]
    }
} as const;