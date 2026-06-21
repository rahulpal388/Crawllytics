import { FeatureCardProps } from "@repo/ui/types/featureCardProps";

export const featuresItems: FeatureCardProps[] = [
    {
        title: "Domain Analysis",
        description:
            "Understand your website as a complete system. Group similar pages, uncover site-wide patterns, and identify the opportunities that have the greatest impact on search visibility.",
        image: {
            alt: "Domain-wide SEO analysis dashboard showing website health and site structure insights",
            path: "/featureImage-1.png",
        },
        steps: [
            "Crawl and discover website pages",
            "Group pages by structure and purpose",
            "Identify domain-wide SEO patterns",
            "Highlight growth opportunities",
        ],
    },

    {
        title: "Page-Level Analysis",
        description:
            "Analyze individual pages to uncover technical issues, content gaps, metadata problems, and optimization opportunities that affect rankings.",
        image: {
            alt: "Page-level SEO analysis interface displaying metadata, headings, and optimization insights",
            path: "/featureImage-1.png",
        },
        steps: [
            "Analyze metadata and page structure",
            "Review headings and content quality",
            "Inspect links, images, and resources",
            "Generate actionable page insights",
        ],
    },

    {
        title: "Technical SEO Audit",
        description:
            "Detect technical issues that prevent search engines from crawling, indexing, and understanding your website effectively.",
        image: {
            alt: "Technical SEO audit dashboard highlighting crawlability and indexability issues",
            path: "/featureImage-1.png",
        },
        steps: [
            "Check crawlability and indexability",
            "Validate canonical and robots directives",
            "Audit security and HTTP configurations",
            "Prioritize technical SEO issues",
        ],
    },

    {
        title: "Content Audit",
        description:
            "Evaluate content quality, structure, and optimization to discover pages that need improvement and opportunities for better search performance.",
        image: {
            alt: "Content audit dashboard analyzing content quality and optimization opportunities",
            path: "/featureImage-1.png",
        },
        steps: [
            "Analyze content depth and relevance",
            "Review heading hierarchy",
            "Detect thin or duplicate content",
            "Find content optimization opportunities",
        ],
    },

    {
        title: "SEO Monitoring",
        description:
            "Continuously monitor your website for SEO changes, newly introduced issues, and performance trends to stay ahead of potential problems.",
        image: {
            alt: "SEO monitoring dashboard tracking website health, trends, and issue alerts",
            path: "/featureImage-1.png",
        },
        steps: [
            "Track website SEO health",
            "Detect new issues automatically",
            "Monitor important page changes",
            "Measure improvement over time",
        ],
    },
];