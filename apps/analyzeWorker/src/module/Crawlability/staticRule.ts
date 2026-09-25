import { SEORules } from "@repo/contracts/types/analysesTypes/SEORules.Type";
import {
    CRAWLABILITY_RULE_IDS,
    crawlabilityRuleId
} from "./rulesId.types.js";




export const crawlabilityStaticRules: Record<
    crawlabilityRuleId,
    SEORules<crawlabilityRuleId>
> = {
    "CRAWL-001": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_001_ROBOTS_BLOCKED,
        name: "URL blocked by robots.txt",
        description:
            "The URL is blocked from crawling by a robots.txt rule.",
        whyItMatters:
            "Search engines cannot fetch the page when crawling is blocked.",
        recommendation: {
            description:
                "Allow crawling if this URL should be accessible to search engines.",
            steps: [
                "Open the site's robots.txt file.",
                "Find the rule blocking this URL.",
                "Remove or modify the blocking rule.",
                "Re-crawl the URL."
            ]
        },
        howToFix: null,
        fix:
            "Update robots.txt and remove the rule that blocks this URL."
    },

    "CRAWL-002": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_002_REDIRECT_LOOP,
        name: "Redirect loop",
        description:
            "The URL is involved in a redirect loop and cannot reach a final destination.",
        whyItMatters:
            "Search engines cannot successfully reach the requested resource.",
        recommendation: {
            description:
                "Remove the circular redirect and point the URL directly to its intended destination.",
            steps: [
                "Inspect the redirect chain.",
                "Find the URL that redirects back to an earlier URL.",
                "Remove the circular redirect.",
                "Test the URL again."
            ]
        },
        howToFix: null,
        fix:
            "Update the server or application redirects so the chain ends at a final URL instead of redirecting back to a previous URL."
    },

    "CRAWL-003": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_003_REDIRECT_CHAIN,
        name: "Redirect chain",
        description:
            "The URL requires multiple redirects before reaching its final destination.",
        whyItMatters:
            "Multiple redirects add requests, latency, and unnecessary crawling work.",
        recommendation: {
            description:
                "Redirect the original URL directly to the final destination.",
            steps: [
                "Inspect the complete redirect chain.",
                "Identify the final destination.",
                "Change the original redirect to point directly to it.",
                "Re-crawl the URL."
            ]
        },
        howToFix: null,
        fix:
            "Replace the redirect chain with a direct redirect from the original URL to the final destination."
    },

    "CRAWL-004": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_004_ORPHAN_PAGE,
        name: "Orphan page",
        description:
            "The page has no internal incoming links from other crawled pages.",
        whyItMatters:
            "Pages without internal links can be harder for search engines to discover through normal site navigation.",
        recommendation: {
            description:
                "Add relevant internal links to the page.",
            steps: [
                "Identify relevant pages.",
                "Add contextual internal links.",
                "Ensure the page is also included in the appropriate sitemap when applicable.",
                "Re-crawl the site."
            ]
        },
        howToFix: null,
        fix:
            "Add relevant internal links pointing to the orphan page."
    },

    "CRAWL-005": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_005_DEEP_PAGE,
        name: "Deep page",
        description:
            "The page requires many discovery steps from the crawl starting point.",
        whyItMatters:
            "Deep pages can indicate that important content is difficult to discover through the site's internal architecture.",
        recommendation: {
            description:
                "Improve the internal linking structure so important pages are easier to discover.",
            steps: [
                "Review the page's crawl depth.",
                "Identify important pages that can link to this page.",
                "Add relevant internal links from higher-level pages.",
                "Re-crawl the site."
            ]
        },
        howToFix: null,
        fix:
            "Add relevant internal links from higher-level pages to make the page easier to discover."
    },

    "CRAWL-006": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_006_CANONICAL_CONFLICT,
        name: "Canonical conflict",
        description:
            "The page has conflicting canonical signals.",
        whyItMatters:
            "Conflicting canonical signals can make it harder for search engines to determine the preferred URL.",
        recommendation: {
            description:
                "Make the canonical URL consistent with the intended preferred page.",
            steps: [
                "Inspect the canonical URL.",
                "Check whether the canonical target is accessible.",
                "Check whether the canonical target redirects or creates another canonical conflict.",
                "Update the canonical URL if necessary."
            ]
        },
        howToFix: null,
        fix:
            "Set the canonical URL to the intended preferred and accessible URL, and keep canonicalization signals consistent."
    },

    "CRAWL-007": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_007_SERVER_ERROR,
        name: "Server error",
        description:
            "The URL returned an HTTP 5xx server error.",
        whyItMatters:
            "Repeated server errors can prevent successful crawling and may cause search engines to reduce crawling activity.",
        recommendation: {
            description:
                "Investigate and resolve the server-side error.",
            steps: [
                "Identify the returned 5xx status code.",
                "Check server and application logs.",
                "Resolve the underlying server error.",
                "Re-crawl the affected URL."
            ]
        },
        howToFix: null,
        fix:
            "Resolve the server-side issue causing the 5xx response and ensure the URL returns the expected HTTP response."
    },

    "CRAWL-008": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_008_RATE_LIMITED,
        name: "URL rate limited",
        description:
            "The server returned HTTP 429 for the URL.",
        whyItMatters:
            "Rate limiting can restrict successful crawling and reduce the crawler's ability to access URLs.",
        recommendation: {
            description:
                "Review the server's rate-limiting configuration and ensure legitimate crawlers can access the site.",
            steps: [
                "Review the URLs returning HTTP 429.",
                "Inspect the server's rate-limit configuration.",
                "Adjust the rate limits where appropriate.",
                "Monitor the response rate after making changes."
            ]
        },
        howToFix: null,
        fix:
            "Review and adjust server-side rate limiting so legitimate crawlers are not unnecessarily restricted."
    },

    "CRAWL-009": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_009_SLOW_RESPONSE,
        name: "Slow server response",
        description:
            "The URL has a high time to first byte or total response time.",
        whyItMatters:
            "Slow server responses increase the time required to crawl URLs and can reduce crawl capacity.",
        recommendation: {
            description:
                "Improve the server response performance for the affected URL.",
            steps: [
                "Review the URL's TTFB.",
                "Review the total response time.",
                "Identify slow server-side operations.",
                "Optimize backend processing, database queries, or caching."
            ]
        },
        howToFix: null,
        fix:
            "Optimize server-side processing, database queries, caching, and infrastructure to reduce response time."
    },

    "CRAWL-010": {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_010_JS_REQUIRED,
        name: "Content requires JavaScript",
        description:
            "Important page content is not available in the initial HTML and requires JavaScript execution.",
        whyItMatters:
            "Content that depends on JavaScript requires additional processing before it becomes available to search engines.",
        recommendation: {
            description:
                "Make important content available in the initial HTML where appropriate.",
            steps: [
                "Compare the initial HTML with the rendered DOM.",
                "Identify important content added by JavaScript.",
                "Move critical content into server-rendered HTML where appropriate.",
                "Re-crawl and compare the initial and rendered content."
            ]
        },
        howToFix: {
            description:
                "Use server-side or static rendering when important content currently depends entirely on client-side JavaScript.",
            fixes: [
                {
                    stack: "next.js-app",
                    label: "Server-render important content",
                    description:
                        "Render important content on the server instead of only after client-side execution.",
                    code: {
                        language: "tsx",
                        code:
                            "export default async function Page() {\n" +
                            "  const data = await getData();\n\n" +
                            "  return <main>{data.content}</main>;\n" +
                            "}"
                    }
                },
                {
                    stack: "react",
                    label: "Render important content in HTML",
                    description:
                        "Ensure important content is available in the page output.",
                    code: {
                        language: "jsx",
                        code:
                            "export default function Page() {\n" +
                            "  return <main>Important content</main>;\n" +
                            "}"
                    }
                }
            ]
        },
        fix:
            "Make important content available in server-rendered or initial HTML instead of requiring client-side JavaScript alone."
    }
};