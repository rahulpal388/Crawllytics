
export const CRAWLABILITY_DOCUMENTATION = {
    HTTP_STATUS: [
        {
            title: "MDN - HTTP Response Status Codes",
            url: "https://developer.mozilla.org/docs/Web/HTTP/Status"
        }
    ],

    REDIRECTS: [
        {
            title: "Google Search Central - Redirects and Google Search",
            url: "https://developers.google.com/search/docs/crawling-indexing/301-redirects"
        }
    ],

    ROBOTS_TXT: [
        {
            title: "Google Search Central - Introduction to robots.txt",
            url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro"
        },
        {
            title: "Google Search Central - Create and Submit a robots.txt File",
            url: "https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt"
        },
        {
            title: "RFC 9309 - The Robots Exclusion Protocol",
            url: "https://www.rfc-editor.org/rfc/rfc9309"
        }
    ],

    ROBOTS_META: [
        {
            title: "Google Search Central - Robots Meta Tag and X-Robots-Tag",
            url: "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag"
        }
    ],

    CANONICAL: [
        {
            title: "Google Search Central - Consolidate Duplicate URLs",
            url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"
        },
        {
            title: "RFC 6596 - Canonical Link Relation",
            url: "https://www.rfc-editor.org/rfc/rfc6596"
        }
    ],

    INTERNAL_LINKING: [
        {
            title: "Google Search Central - Site Architecture",
            url: "https://developers.google.com/search/docs/crawling-indexing/site-architecture"
        }
    ],

    XML_SITEMAPS: [
        {
            title: "Google Search Central - XML Sitemaps Overview",
            url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
        },
        {
            title: "Sitemaps.org Protocol",
            url: "https://www.sitemaps.org/protocol.html"
        }
    ],

    PERFORMANCE: [
        {
            title: "web.dev - Optimize Time to First Byte (TTFB)",
            url: "https://web.dev/articles/optimize-ttfb"
        },
        {
            title: "Google Search Central - Core Web Vitals",
            url: "https://developers.google.com/search/docs/appearance/core-web-vitals"
        }
    ]
} as const;