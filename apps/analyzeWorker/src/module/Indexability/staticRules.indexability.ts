


import { INDEXABILITY_RULE_IDS, indexabilityRuleId } from "@/module/Indexability/ruleId.indexability.js";
import { SEORules } from "@repo/contracts/types/analysesTypes/SEORules.Type";


export const indexabilityStaticRules: Record<
    indexabilityRuleId,
    SEORules<indexabilityRuleId>
> = {

    [INDEXABILITY_RULE_IDS.INDEX_001_FETCH_FAILED]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_001_FETCH_FAILED,
        name: "Page Fetch Failed",
        description:
            "The page could not be successfully fetched.",
        whyItMatters:
            "A page that cannot be successfully fetched cannot be reliably processed for indexing.",
        recommendation: {
            description:
                "Identify and resolve the underlying problem preventing the page from being fetched.",
            steps: [
                "Check DNS configuration.",
                "Check TLS and network connectivity.",
                "Check server availability.",
                "Check request timeout configuration.",
                "Fix the underlying server or infrastructure problem."
            ]
        },
        howToFix: null,
        fix:
            "Resolve the DNS, network, TLS, timeout, or server availability problem preventing the URL from being fetched."
    },

    [INDEXABILITY_RULE_IDS.INDEX_002_404_STATUS]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_002_404_STATUS,
        name: "Page Returns 404",
        description:
            "The page returns a 404 Not Found response.",
        whyItMatters:
            "A 404 response indicates that the requested resource does not exist and therefore cannot provide an indexable page.",
        recommendation: {
            description:
                "Restore the page if it should exist or redirect it to a relevant replacement.",
            steps: [
                "Determine whether the page should still exist.",
                "Restore the page if it was removed accidentally.",
                "Add a redirect to a relevant replacement if one exists.",
                "Remove references to permanently deleted URLs."
            ]
        },
        howToFix: null,
        fix:
            "Restore the missing page or redirect the URL to a relevant replacement when appropriate."
    },

    [INDEXABILITY_RULE_IDS.INDEX_003_5XX_STATUS]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_003_5XX_STATUS,
        name: "Server Error",
        description:
            "The page returns a 5xx server error.",
        whyItMatters:
            "Persistent server errors prevent search engines from reliably accessing and processing the page.",
        recommendation: {
            description:
                "Identify and fix the server-side cause of the error.",
            steps: [
                "Inspect application and server logs.",
                "Check database and API failures.",
                "Check server resource usage.",
                "Fix application or infrastructure errors.",
                "Ensure the URL returns a successful response."
            ]
        },
        howToFix: null,
        fix:
            "Resolve the application, database, infrastructure, or server configuration problem causing the 5xx response."
    },

    [INDEXABILITY_RULE_IDS.INDEX_004_SOFT_404]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_004_SOFT_404,
        name: "Soft 404",
        description:
            "The page returns a successful response but behaves like a missing page.",
        whyItMatters:
            "A page that behaves like a missing resource may not be considered a useful indexable document despite returning HTTP 200.",
        recommendation: {
            description:
                "Return the appropriate HTTP status or provide meaningful content for the URL.",
            steps: [
                "Return 404 or 410 if the resource does not exist.",
                "Restore meaningful content if the page should exist.",
                "Replace generic missing-page content with the actual page content when appropriate."
            ]
        },
        howToFix: null,
        fix:
            "Return an appropriate 4xx status for missing resources or provide meaningful content when the page should exist."
    },

    [INDEXABILITY_RULE_IDS.INDEX_005_REDIRECT_CHAIN]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_005_REDIRECT_CHAIN,
        name: "Redirect Chain",
        description:
            "The URL passes through multiple redirects before reaching the final destination.",
        whyItMatters:
            "Redirect chains create unnecessary steps between the requested URL and the final resource and can introduce additional failure points.",
        recommendation: {
            description:
                "Change the redirect sequence so the original URL points directly to the final destination.",
            steps: [
                "Identify the complete redirect chain.",
                "Remove unnecessary intermediate redirects.",
                "Point the original URL directly to the final destination.",
                "Update internal links to use the final URL."
            ]
        },
        howToFix: null,
        fix:
            "Replace the redirect chain with a direct redirect to the final destination."
    },

    [INDEXABILITY_RULE_IDS.INDEX_006_REDIRECT_LOOP]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_006_REDIRECT_LOOP,
        name: "Redirect Loop",
        description:
            "The URL is involved in a redirect loop.",
        whyItMatters:
            "A redirect loop prevents the final resource from being reached.",
        recommendation: {
            description:
                "Remove the circular redirect and define one valid destination.",
            steps: [
                "Trace the redirect sequence.",
                "Identify the URL that redirects back to an earlier URL.",
                "Remove the conflicting redirect rule.",
                "Set the URL to redirect directly to the intended destination."
            ]
        },
        howToFix: null,
        fix:
            "Remove the circular redirect and make the URL resolve to a single valid destination."
    },

    [INDEXABILITY_RULE_IDS.INDEX_007_TOO_MANY_REDIRECTS]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_007_TOO_MANY_REDIRECTS,
        name: "Too Many Redirects",
        description:
            "The URL requires an excessive number of redirects before reaching its final destination.",
        whyItMatters:
            "An excessive redirect sequence creates unnecessary processing and additional points of failure.",
        recommendation: {
            description:
                "Reduce the redirect sequence to the shortest valid path.",
            steps: [
                "Inspect all redirects between the original and final URL.",
                "Remove unnecessary intermediate redirects.",
                "Point the original URL directly to the final destination.",
                "Update internal links to the final URL."
            ]
        },
        howToFix: null,
        fix:
            "Reduce the number of redirects and point the original URL directly to the final destination."
    },

    [INDEXABILITY_RULE_IDS.INDEX_008_NOINDEX]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_008_NOINDEX,
        name: "Noindex Directive",
        description:
            "The page contains a noindex directive.",
        whyItMatters:
            "The noindex directive tells search engines not to include the page in their index.",
        recommendation: {
            description:
                "Remove the noindex directive if the page is intended to be indexed.",
            steps: [
                "Locate the robots meta directive.",
                "Remove the noindex directive.",
                "Ensure no other configuration adds a noindex directive."
            ]
        },
        howToFix: null,
        fix:
            "Remove the noindex directive when the page should be available for indexing."
    },

    [INDEXABILITY_RULE_IDS.INDEX_009_X_ROBOTS_NOINDEX]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_009_X_ROBOTS_NOINDEX,
        name: "X-Robots-Tag Noindex",
        description:
            "The X-Robots-Tag HTTP header contains a noindex directive.",
        whyItMatters:
            "The X-Robots-Tag can prevent a resource from being indexed through an HTTP response header.",
        recommendation: {
            description:
                "Remove the X-Robots-Tag noindex directive when the resource should be indexed.",
            steps: [
                "Inspect the HTTP response headers.",
                "Identify the server, framework, CDN, or middleware adding the directive.",
                "Remove the noindex directive from the response.",
                "Ensure another layer is not adding the directive."
            ]
        },
        howToFix: null,
        fix:
            "Remove the X-Robots-Tag noindex directive from the HTTP response when the resource should be indexed."
    },

    [INDEXABILITY_RULE_IDS.INDEX_010_CANONICAL_CONFLICT]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_010_CANONICAL_CONFLICT,
        name: "Canonical Conflict",
        description:
            "The page contains conflicting canonical signals.",
        whyItMatters:
            "Conflicting canonical signals make it unclear which URL should be treated as the preferred version.",
        recommendation: {
            description:
                "Make all canonical signals point consistently to the intended preferred URL.",
            steps: [
                "Identify all canonical signals for the URL.",
                "Determine the intended canonical URL.",
                "Remove conflicting canonical declarations.",
                "Make the remaining canonical signals consistent."
            ]
        },
        howToFix: null,
        fix:
            "Remove conflicting canonical declarations and make the canonical signals consistently point to the intended URL."
    },

    [INDEXABILITY_RULE_IDS.INDEX_011_CANONICAL_TO_ERROR]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_011_CANONICAL_TO_ERROR,
        name: "Canonical Points to Error",
        description:
            "The canonical URL returns an HTTP error response.",
        whyItMatters:
            "A canonical pointing to an unavailable resource provides an invalid preferred-URL signal.",
        recommendation: {
            description:
                "Point the canonical to a valid URL that represents the page.",
            steps: [
                "Identify the canonical target returning the error.",
                "Restore the canonical target if it should exist.",
                "Otherwise select a valid URL representing the same content.",
                "Update the canonical declaration."
            ]
        },
        howToFix: null,
        fix:
            "Change the canonical to a valid URL that represents the page and returns a successful response."
    },

    [INDEXABILITY_RULE_IDS.INDEX_012_CANONICAL_TO_NOINDEX]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_012_CANONICAL_TO_NOINDEX,
        name: "Canonical Points to Noindex Page",
        description:
            "The canonical URL points to a page that is marked noindex.",
        whyItMatters:
            "The page identifies a URL as its preferred version while that URL is explicitly excluded from indexing.",
        recommendation: {
            description:
                "Make the canonical target indexable or choose another appropriate canonical.",
            steps: [
                "Check the canonical target's robots directives.",
                "Remove noindex from the canonical target if appropriate.",
                "Otherwise choose an indexable canonical target.",
                "Update the canonical declaration."
            ]
        },
        howToFix: null,
        fix:
            "Point the canonical to an indexable URL or remove noindex from the canonical target when appropriate."
    },

    [INDEXABILITY_RULE_IDS.INDEX_013_SITEMAP_NOINDEX_CONFLICT]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_013_SITEMAP_NOINDEX_CONFLICT,
        name: "Sitemap and Noindex Conflict",
        description:
            "The URL is included in the sitemap while also being marked noindex.",
        whyItMatters:
            "The sitemap indicates that the URL is part of the site's preferred URL set while noindex explicitly prevents it from being indexed.",
        recommendation: {
            description:
                "Make the sitemap and indexing directive consistent.",
            steps: [
                "If the page should be indexed, remove the noindex directive.",
                "If the page should not be indexed, remove it from the XML sitemap."
            ]
        },
        howToFix: null,
        fix:
            "Either remove noindex from the page or remove the URL from the XML sitemap."
    },

    [INDEXABILITY_RULE_IDS.INDEX_014_CONTENT_REQUIRES_JAVASCRIPT]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_014_CONTENT_REQUIRES_JAVASCRIPT,
        name: "Content Requires JavaScript",
        description:
            "Important page content depends on JavaScript rendering.",
        whyItMatters:
            "Content that is unavailable without JavaScript rendering may not be processed as reliably as content available in the initial HTML.",
        recommendation: {
            description:
                "Make important indexable content available in the initial HTML where practical.",
            steps: [
                "Identify important content that is only generated by JavaScript.",
                "Server-render or statically generate the important content.",
                "Keep the primary page content available in the initial HTML."
            ]
        },
        howToFix: {
            description:
                "Use server-side rendering or static generation so important content is present in the initial HTML.",
            fixes: [
                {
                    stack: "next.js-app",
                    label: "Next.js",
                    description:
                        "Fetch the required data on the server and render the page content directly from the server component.",
                    code: {
                        language: "tsx",
                        code: `export default async function Page() {
    const data = await getData();

    return (
        <main>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </main>
    );
}`
                    }
                }
            ]
        },
        fix:
            "Server-render or statically generate important content so it is available in the initial HTML."
    },

    [INDEXABILITY_RULE_IDS.INDEX_015_BLOCKED_JAVASCRIPT_RESOURCES]: {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_015_BLOCKED_JAVASCRIPT_RESOURCES,
        name: "Blocked JavaScript Resources",
        description:
            "JavaScript resources required to render important page content are blocked.",
        whyItMatters:
            "Blocked resources can prevent required content from being rendered correctly.",
        recommendation: {
            description:
                "Allow access to JavaScript resources required to render important content.",
            steps: [
                "Identify the blocked JavaScript resources.",
                "Check robots.txt rules affecting those resources.",
                "Check server and CDN access restrictions.",
                "Allow access to JavaScript resources required for rendering."
            ]
        },
        howToFix: null,
        fix:
            "Allow crawlers to access JavaScript resources required to render important page content."
    }

};