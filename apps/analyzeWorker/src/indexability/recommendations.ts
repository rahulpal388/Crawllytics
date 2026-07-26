import { INDEXABILITY_ISSUES_CODES, IndexabilityIssueCode } from "@/indexability/issuesCode.js";
import { RecommendationType } from "@/types/recommendationTypes.js";
import { INDEXABILITY_DOCUMENTATION } from "@/indexability/documentations.js";

export const indexabilityRecommendations: Record<
    IndexabilityIssueCode,
    RecommendationType
> = {
    [INDEXABILITY_ISSUES_CODES.SOFT_404]: {
        title: "Soft 404 detected",
        description: "The page appears to exist but behaves like a missing page.",
        whyItMatters: "Search engines may treat soft 404 pages as non-indexable.",
        howToFix: [
            "Return a proper 404 status for missing pages.",
            "Add meaningful content if the page should exist.",
            "Avoid redirecting all missing pages to the homepage."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_HTTP_STATUS_CODES
        ]
    },

    [INDEXABILITY_ISSUES_CODES.NON_HTML_CONTENT]: {
        title: "Page is not served as HTML",
        description: "The resource is served with a non-HTML Content-Type.",
        whyItMatters: "HTML pages should use the text/html MIME type to be interpreted correctly.",
        howToFix: [
            "Serve HTML documents with the 'text/html' Content-Type.",
            "Verify your web server configuration.",
            "Ensure reverse proxies and CDNs preserve the correct header."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.MDN_CONTENT_TYPE
        ]
    },
    [INDEXABILITY_ISSUES_CODES.PAGE_NOT_FOUND]: {
        title: "Page returned 404",
        description: "The page returned an HTTP 404 (Not Found) response.",
        whyItMatters: "404 pages cannot be indexed and create a poor user experience.",
        howToFix: [
            "Restore the missing page if it should exist.",
            "Redirect the URL to the most relevant page using a 301 redirect.",
            "Update internal links pointing to this URL.",
            "Remove the URL from your XML sitemap if it no longer exists."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_HTTP_STATUS_CODES
        ]
    },

    [INDEXABILITY_ISSUES_CODES.CLIENT_ERROR]: {
        title: "Client error detected",
        description: "The page returned a 4xx HTTP response.",
        whyItMatters: "Search engines cannot access or index pages returning client errors.",
        howToFix: [
            "Identify the cause of the client error.",
            "Ensure the URL returns HTTP 200 if it should be indexed.",
            "Update broken internal links."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_HTTP_STATUS_CODES
        ]
    },

    [INDEXABILITY_ISSUES_CODES.SERVER_ERROR]: {
        title: "Server error detected",
        description: "The page returned a 5xx HTTP response.",
        whyItMatters: "Persistent server errors can cause pages to be removed from Google's index.",
        howToFix: [
            "Investigate application or server logs.",
            "Resolve the server issue.",
            "Verify the page consistently returns HTTP 200."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_HTTP_STATUS_CODES
        ]
    },

    [INDEXABILITY_ISSUES_CODES.REDIRECT_PAGE]: {
        title: "Page redirects",
        description: "The URL redirects to another page.",
        whyItMatters: "Redirect URLs are generally not indexed. Search engines index the destination URL instead.",
        howToFix: [
            "Use the destination URL in internal links.",
            "Replace redirected URLs in your sitemap.",
            "Minimize unnecessary redirects."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_REDIRECTS
        ]
    },

    [INDEXABILITY_ISSUES_CODES.META_NOINDEX]: {
        title: "Meta robots contains noindex",
        description: "The page contains a noindex directive.",
        whyItMatters: "Search engines will exclude this page from search results.",
        howToFix: [
            "Remove the noindex directive if the page should be indexed.",
            "Verify the directive wasn't added accidentally.",
            "Request re-indexing after deployment."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_META_ROBOTS
        ]
    },

    [INDEXABILITY_ISSUES_CODES.META_NONE]: {
        title: "Meta robots contains none",
        description: "The page contains the 'none' directive.",
        whyItMatters: "'none' is equivalent to 'noindex,nofollow'.",
        howToFix: [
            "Replace 'none' with the intended robots directives.",
            "Remove it if indexing should be allowed."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_META_ROBOTS
        ]
    },

    [INDEXABILITY_ISSUES_CODES.META_UNAVAILABLE_AFTER]: {
        title: "Page has an expiration directive",
        description: "The page specifies an unavailable_after directive.",
        whyItMatters: "Search engines may remove the page after the specified date.",
        howToFix: [
            "Verify the expiration date is intentional.",
            "Remove the directive if the page should remain indexed."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_META_ROBOTS
        ]
    },

    [INDEXABILITY_ISSUES_CODES.META_NOSNIPPET]: {
        title: "Meta robots contains nosnippet",
        description: "The page prevents search engines from showing snippets.",
        whyItMatters: "Reduced search result visibility may lower click-through rates.",
        howToFix: [
            "Remove the nosnippet directive unless intentionally required."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_META_ROBOTS
        ]
    },

    [INDEXABILITY_ISSUES_CODES.META_NOARCHIVE]: {
        title: "Meta robots contains noarchive",
        description: "Cached versions are disabled.",
        whyItMatters: "Users won't be able to access cached copies from search results.",
        howToFix: [
            "Remove the noarchive directive if caching should be allowed."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_META_ROBOTS
        ]
    },

    [INDEXABILITY_ISSUES_CODES.X_ROBOTS_NOINDEX]: {
        title: "X-Robots-Tag contains noindex",
        description: "The HTTP header prevents indexing.",
        whyItMatters: "Search engines will not index this page.",
        howToFix: [
            "Remove the noindex directive from the X-Robots-Tag header."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_X_ROBOTS_TAG
        ]
    },

    [INDEXABILITY_ISSUES_CODES.X_ROBOTS_NONE]: {
        title: "X-Robots-Tag contains none",
        description: "The HTTP header blocks indexing and crawling.",
        whyItMatters: "Search engines won't index or follow links on this page.",
        howToFix: [
            "Remove the 'none' directive if unintended."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_X_ROBOTS_TAG
        ]
    },

    [INDEXABILITY_ISSUES_CODES.X_ROBOTS_UNAVAILABLE_AFTER]: {
        title: "X-Robots-Tag expiration detected",
        description: "The HTTP header specifies an unavailable_after directive.",
        whyItMatters: "The page may be removed from search results after the specified date.",
        howToFix: [
            "Verify the expiration date.",
            "Remove the directive if unnecessary."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_X_ROBOTS_TAG
        ]
    },

    [INDEXABILITY_ISSUES_CODES.X_ROBOTS_NOSNIPPET]: {
        title: "X-Robots-Tag contains nosnippet",
        description: "The HTTP header disables search snippets.",
        whyItMatters: "Reduced snippet visibility may decrease click-through rate.",
        howToFix: [
            "Remove the nosnippet directive unless intentionally required."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_X_ROBOTS_TAG
        ]
    },

    [INDEXABILITY_ISSUES_CODES.X_ROBOTS_NOARCHIVE]: {
        title: "X-Robots-Tag contains noarchive",
        description: "Cached search results are disabled.",
        whyItMatters: "Users cannot access cached versions of the page.",
        howToFix: [
            "Remove the noarchive directive if cached pages should be available."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_X_ROBOTS_TAG
        ]
    },

    [INDEXABILITY_ISSUES_CODES.CONFLICTING_ROBOTS_DIRECTIVES]: {
        title: "Conflicting robots directives",
        description: "The page contains contradictory robots directives.",
        whyItMatters: "Conflicting directives can lead to unpredictable indexing behavior.",
        howToFix: [
            "Use one consistent indexing policy.",
            "Remove conflicting robots directives."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_META_ROBOTS,
            INDEXABILITY_DOCUMENTATION.GOOGLE_X_ROBOTS_TAG
        ]
    },

    [INDEXABILITY_ISSUES_CODES.META_AND_X_ROBOTS_CONFLICT]: {
        title: "Meta robots conflicts with X-Robots-Tag",
        description: "HTML and HTTP header robots directives do not match.",
        whyItMatters: "Conflicting indexing signals create ambiguity for search engines.",
        howToFix: [
            "Ensure both robots directives specify the same indexing policy."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_META_ROBOTS,
            INDEXABILITY_DOCUMENTATION.GOOGLE_X_ROBOTS_TAG
        ]
    },

    [INDEXABILITY_ISSUES_CODES.MISSING_CANONICAL]: {
        title: "Canonical tag missing",
        description: "No canonical tag was found.",
        whyItMatters: "Search engines may have difficulty determining the preferred version of duplicate pages.",
        howToFix: [
            "Add a self-referencing canonical tag.",
            "Ensure the canonical points to the preferred URL."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_CANONICAL
        ]
    },

    [INDEXABILITY_ISSUES_CODES.MULTIPLE_CANONICAL_TAGS]: {
        title: "Multiple canonical tags detected",
        description: "More than one canonical tag exists.",
        whyItMatters: "Multiple canonical tags can confuse search engines.",
        howToFix: [
            "Keep only one canonical tag per page.",
            "Remove duplicate canonical elements."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_CANONICAL
        ]
    },

    [INDEXABILITY_ISSUES_CODES.RELATIVE_CANONICAL_URL]: {
        title: "Relative canonical URL",
        description: "The canonical URL is relative.",
        whyItMatters: "Relative canonical URLs may be interpreted incorrectly.",
        howToFix: [
            "Use an absolute canonical URL including the protocol and hostname."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_CANONICAL
        ]
    },

    [INDEXABILITY_ISSUES_CODES.INVALID_CANONICAL_URL]: {
        title: "Invalid canonical URL",
        description: "The canonical URL is malformed.",
        whyItMatters: "Search engines may ignore invalid canonical URLs.",
        howToFix: [
            "Correct the canonical URL.",
            "Ensure it is a valid absolute URL."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_CANONICAL
        ]
    },

    [INDEXABILITY_ISSUES_CODES.NON_HTTPS_CANONICAL]: {
        title: "Canonical URL is not HTTPS",
        description: "The canonical URL uses HTTP.",
        whyItMatters: "HTTPS is the recommended protocol for indexed pages.",
        howToFix: [
            "Update the canonical URL to use HTTPS."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_CANONICAL
        ]
    },

    [INDEXABILITY_ISSUES_CODES.CANONICAL_TO_DIFFERENT_PAGE]: {
        title: "Canonical points to another page",
        description: "The canonical references a different URL.",
        whyItMatters: "Search engines may index the canonical target instead of the current page.",
        howToFix: [
            "Verify the canonical target is intentional.",
            "Use a self-referencing canonical if appropriate."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_CANONICAL
        ]
    },

    [INDEXABILITY_ISSUES_CODES.CANONICAL_TO_EXTERNAL_DOMAIN]: {
        title: "Cross-domain canonical detected",
        description: "The canonical points to another domain.",
        whyItMatters: "Ranking signals may be transferred to the external domain.",
        howToFix: [
            "Verify the cross-domain canonical is intentional.",
            "Point the canonical to your own domain if appropriate."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_CANONICAL
        ]
    },

    [INDEXABILITY_ISSUES_CODES.CANONICAL_ON_NON_INDEXABLE_PAGE]: {
        title: "Canonical on a non-indexable page",
        description: "The page has a canonical but cannot be indexed.",
        whyItMatters: "Canonical signals may be ignored on non-indexable pages.",
        howToFix: [
            "Review the indexing directives.",
            "Ensure the page should be indexable before relying on canonicalization."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.GOOGLE_CANONICAL,
            INDEXABILITY_DOCUMENTATION.GOOGLE_META_ROBOTS
        ]
    },

    [INDEXABILITY_ISSUES_CODES.MISSING_CONTENT_TYPE]: {
        title: "Missing Content-Type header",
        description: "The server did not send a Content-Type header.",
        whyItMatters: "Search engines use the Content-Type header to understand how the resource should be processed.",
        howToFix: [
            "Configure the server to send the correct Content-Type header.",
            "Serve HTML pages using text/html."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.MDN_CONTENT_TYPE
        ]
    },

    [INDEXABILITY_ISSUES_CODES.INVALID_CONTENT_TYPE]: {
        title: "Invalid Content-Type",
        description: "The page is not served as HTML.",
        whyItMatters: "HTML pages should use the text/html MIME type.",
        howToFix: [
            "Configure the server to return 'text/html' for HTML documents.",
            "Verify reverse proxies and CDNs preserve the Content-Type header."
        ],
        documentationLinks: [
            INDEXABILITY_DOCUMENTATION.MDN_CONTENT_TYPE
        ]
    }
} as const;