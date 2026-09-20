import { IssuesInfoResponseType } from "../../../types/apiResponseType/issuesTypes.js";

// #####################################
// API endpoint => /issues/:issueId
// #####################################

export const issuesInfoTempData: IssuesInfoResponseType[] = [
  {
    id: "1",

    title: "Missing Meta Descriptions",

    severity: "critical",

    category: "metadata",

    description:
      "14 pages on your website are missing a meta description. Search engines may generate their own description from the page content, which can result in less relevant or compelling search snippets.",

    whyItMatters:
      "Meta descriptions help search engines and users understand what a page is about. Although they are not a direct ranking factor, a well-written description can improve the quality of your search snippet and potentially increase organic click-through rates.",

    recommended: {
      description:
        "Add a unique and relevant meta description to every indexable page affected by this issue.",

      steps: [
        "Write a unique description for each page.",
        "Clearly summarize the main content of the page.",
        "Include the primary topic or keyword naturally.",
        "Keep the description concise and useful for search users.",
        "Avoid using the same description across multiple pages.",
      ],
    },

    howToFix: {
      description:
        "Add a unique meta description to the affected pages using the approach appropriate for your framework.",

      fixes: [
        {
          stack: "next.js-app",
          label: "Next.js (App Router)",

          description:
            "If you are using the Next.js App Router, define the description using the Metadata API in your page or layout file.",

          code: {
            language: "tsx",

            code: `export const metadata = {
  title: "SEO Audit Tool",
  description:
    "Analyze your website and find technical SEO issues.",
};`,
          },
        },

        {
          stack: "next.js-page",
          label: "Next.js (Pages Router)",

          description:
            "If you are using the Next.js Pages Router, add the meta description using the Head component.",

          code: {
            language: "tsx",

            code: `import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>SEO Audit Tool</title>
        <meta
          name="description"
          content="Analyze your website and find technical SEO issues."
        />
      </Head>

      <main>
        {/* Page content */}
      </main>
    </>
  );
}`,
          },
        },

        {
          stack: "react",
          label: "React",

          description:
            "If you are using React with a head management library such as react-helmet-async, add the meta description to the document head.",

          code: {
            language: "jsx",

            code: `import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>SEO Audit Tool</title>
        <meta
          name="description"
          content="Analyze your website and find technical SEO issues."
        />
      </Helmet>

      <main>
        {/* Page content */}
      </main>
    </>
  );
}`,
          },
        },

        {
          stack: "html",
          label: "HTML",

          description:
            "If your website uses plain HTML, add the meta description inside the head element of each affected page.",

          code: {
            language: "html",

            code: `<head>
  <title>SEO Audit Tool</title>

  <meta
    name="description"
    content="Analyze your website and find technical SEO issues."
  />
</head>`,
          },
        },
      ],
    },

    affectedPages: {
      count: 14,

      pages: [
        {
          pageId: "page_001",
          url: "https://example.com/",
          title: "Home - SEO Audit Tool",
        },
        {
          pageId: "page_002",
          url: "https://example.com/products",
          title: "Products - SEO Audit Tool",
        },
        {
          pageId: "page_003",
          url: "https://example.com/products/seo-audit",
          title: "SEO Audit Tool - Analyze Your Website",
        },
        {
          pageId: "page_004",
          url: "https://example.com/products/site-crawler",
          title: "Site Crawler - Discover Your Website's Structure",
        },
        {
          pageId: "page_005",
          url: "https://example.com/features",

          title: "Features - SEO Audit Tool",
        },
        {
          pageId: "page_006",
          url: "https://example.com/features/technical-seo",
          title: "Technical SEO - Features - SEO Audit Tool",
        },
        {
          pageId: "page_007",
          url: "https://example.com/pricing",
          title: "Pricing - SEO Audit Tool",
        },
        {
          pageId: "page_008",
          url: "https://example.com/about",
          title: "About - SEO Audit Tool",
        },
        {
          pageId: "page_009",
          url: "https://example.com/contact",
          title: "Contact - SEO Audit Tool",
        },
        {
          pageId: "page_010",
          url: "https://example.com/blog",
          title: "Blog - SEO Audit Tool",
        },
        {
          pageId: "page_011",
          url: "https://example.com/blog/technical-seo",
          title: "Technical SEO - Blog - SEO Audit Tool",
        },
        {
          pageId: "page_012",
          url: "https://example.com/blog/seo-audit-guide",
          title: "SEO Audit Guide - Blog - SEO Audit Tool",
        },
        {
          pageId: "page_013",
          url: "https://example.com/resources",
          title: "Resources - SEO Audit Tool",
        },
        {
          pageId: "page_014",
          url: "https://example.com/resources/seo-checklist",
          title: "SEO Checklist - Resources - SEO Audit Tool",
        },
      ],
    },

    detected: new Date("2026-08-12T09:24:00Z"),

    crawlCount: 3,
  },
  {
    id: "2",

    title: "Duplicate Title Tags",

    severity: "critical",

    category: "metadata",

    description:
      "8 pages on your website use the same title tag. Duplicate titles make it harder for search engines to understand how these pages differ and can result in less descriptive search result listings.",

    whyItMatters:
      "The title tag is one of the most important on-page signals for helping search engines and users understand what a page is about. When multiple pages use the same title, each page has less unique context and users may have difficulty distinguishing between them in search results.",

    recommended: {
      description:
        "Give every indexable page a unique, descriptive title that accurately reflects its primary content and purpose.",

      steps: [
        "Create a unique title for every indexable page.",
        "Describe the primary topic or purpose of the page clearly.",
        "Include the primary keyword naturally when relevant.",
        "Keep titles concise so the main information is visible in search results.",
        "Avoid using the same title across different pages.",
      ],
    },

    howToFix: {
      description:
        "Update the title of each affected page so that it accurately describes that page's unique content and purpose.",

      fixes: [
        {
          stack: "next.js-app",

          label: "Next.js (App Router)",

          description:
            "If you are using the Next.js App Router, define a unique title using the Metadata API in the page or layout file.",

          code: {
            language: "tsx",

            code: `export const metadata = {
  title: "Technical SEO Audit",
  description:
    "Analyze technical SEO issues across your website.",
};`,
          },
        },

        {
          stack: "next.js-page",

          label: "Next.js (Pages Router)",

          description:
            "If you are using the Next.js Pages Router, define a unique title using the Head component for each page.",

          code: {
            language: "tsx",

            code: `import Head from "next/head";

export default function AuditPage() {
  return (
    <>
      <Head>
        <title>Technical SEO Audit</title>
      </Head>

      <main>
        {/* Page content */}
      </main>
    </>
  );
}`,
          },
        },

        {
          stack: "react",

          label: "React",

          description:
            "If you are using React with a head management library, set a unique title for each page.",

          code: {
            language: "jsx",

            code: `import { Helmet } from "react-helmet-async";

export default function AuditPage() {
  return (
    <>
      <Helmet>
        <title>Technical SEO Audit</title>
      </Helmet>

      <main>
        {/* Page content */}
      </main>
    </>
  );
}`,
          },
        },

        {
          stack: "html",

          label: "HTML",

          description:
            "If your website uses plain HTML, add a unique title inside the head element of every affected page.",

          code: {
            language: "html",

            code: `<head>
  <title>Technical SEO Audit</title>
</head>`,
          },
        },
      ],
    },

    affectedPages: {
      count: 8,

      pages: [
        {
          pageId: "page_002",
          url: "https://example.com/products",
          title: "Products - SEO Audit Tool",
        },
        {
          pageId: "page_003",
          url: "https://example.com/products/seo-audit",
          title: "SEO Audit - Products - SEO Audit Tool",
        },
        {
          pageId: "page_004",
          url: "https://example.com/products/site-crawler",
          title: "Site Crawler - Products - SEO Audit Tool",
        },
        {
          pageId: "page_006",
          url: "https://example.com/features/technical-seo",
          title: "Technical SEO - Features - SEO Audit Tool",
        },
        {
          pageId: "page_007",
          url: "https://example.com/pricing",
          title: "Pricing - SEO Audit Tool",
        },
        {
          pageId: "page_010",
          url: "https://example.com/blog",
          title: "Blog - SEO Audit Tool",
        },
        {
          pageId: "page_011",
          url: "https://example.com/blog/technical-seo",
          title: "Technical SEO - Blog - SEO Audit Tool",
        },
        {
          pageId: "page_012",
          url: "https://example.com/blog/seo-audit-guide",
          title: "SEO Audit Guide - Blog - SEO Audit Tool",
        },
      ],
    },

    detected: new Date("2026-08-12T09:31:00Z"),

    crawlCount: 3,
  },
  {
    id: "3",

    title: "Missing H1 Heading",

    severity: "critical",

    category: "content",

    description:
      "6 pages on your website do not contain an H1 heading. The H1 helps communicate the main topic of a page to users and provides search engines with an important structural signal about the page's primary content.",

    whyItMatters:
      "An H1 heading helps users quickly understand the main topic of a page and provides a clear heading structure for search engines and assistive technologies. Pages without a clear primary heading may have weaker content structure and can be harder to understand.",

    recommended: {
      description:
        "Add one clear and descriptive H1 heading to every affected page that accurately represents the main topic of the page.",

      steps: [
        "Add a clear H1 heading that describes the primary topic of the page.",
        "Use one primary H1 heading for the main page content.",
        "Make the H1 relevant to the actual content of the page.",
        "Include the primary keyword naturally when appropriate.",
        "Avoid using the same H1 for unrelated pages.",
      ],
    },

    howToFix: {
      description:
        "Add an H1 element to the main content of each affected page and make sure the heading accurately describes the page's primary topic.",

      fixes: [
        {
          stack: "next.js-app",

          label: "Next.js (App Router)",

          description:
            "If you are using the Next.js App Router, add a semantic h1 element to the page component containing the main heading for the page.",

          code: {
            language: "tsx",

            code: `export default function Page() {
  return (
    <main>
      <h1>Technical SEO Audit</h1>

      {/* Page content */}
    </main>
  );
}`,
          },
        },

        {
          stack: "next.js-page",

          label: "Next.js (Pages Router)",

          description:
            "If you are using the Next.js Pages Router, add a semantic h1 element to the page component.",

          code: {
            language: "tsx",

            code: `export default function AuditPage() {
  return (
    <main>
      <h1>Technical SEO Audit</h1>

      {/* Page content */}
    </main>
  );
}`,
          },
        },

        {
          stack: "react",

          label: "React",

          description:
            "Add a semantic h1 element inside the main content of the React page component.",

          code: {
            language: "jsx",

            code: `export default function AuditPage() {
  return (
    <main>
      <h1>Technical SEO Audit</h1>

      {/* Page content */}
    </main>
  );
}`,
          },
        },

        {
          stack: "html",

          label: "HTML",

          description: "Add an H1 element to the main content of the affected HTML page.",

          code: {
            language: "html",

            code: `<main>
  <h1>Technical SEO Audit</h1>

  <!-- Page content -->
</main>`,
          },
        },
      ],
    },

    affectedPages: {
      count: 6,

      pages: [
        {
          pageId: "page_003",
          url: "https://example.com/products/seo-audit",
          title: "SEO Audit - Products - SEO Audit Tool",
        },
        {
          pageId: "page_004",
          url: "https://example.com/products/site-crawler",
          title: "Site Crawler - Products - SEO Audit Tool",
        },
        {
          pageId: "page_006",
          url: "https://example.com/features/technical-seo",
          title: "Technical SEO - Features - SEO Audit Tool",
        },
        {
          pageId: "page_008",
          url: "https://example.com/about",
          title: "About - SEO Audit Tool",
        },
        {
          pageId: "page_010",
          url: "https://example.com/blog",
          title: "Blog - SEO Audit Tool",
        },
        {
          pageId: "page_013",
          url: "https://example.com/resources",
          title: "Resources - SEO Audit Tool",
        },
      ],
    },

    detected: new Date("2026-08-12T09:36:00Z"),

    crawlCount: 3,
  },
  {
    id: "4",

    title: "Broken Internal Links",

    severity: "critical",

    category: "crawlability",

    description:
      "9 internal links on your website point to URLs that return an error or cannot be reached. Broken internal links can prevent users and search engine crawlers from reaching important pages.",

    whyItMatters:
      "Internal links help search engines discover and understand the structure of your website. Broken links interrupt that path, waste crawl resources, create a poor user experience, and can prevent link equity from being passed to the intended pages.",

    recommended: {
      description:
        "Update or remove broken internal links so that every internal link points to a valid and relevant page.",

      steps: [
        "Identify every internal link that returns a broken or unsuccessful response.",
        "Replace each broken URL with the correct active URL when an equivalent page exists.",
        "Remove links that no longer have a relevant destination.",
        "Avoid linking to redirected URLs when you can link directly to the final destination.",
        "Run another crawl after making the changes to verify that the broken links have been resolved.",
      ],
    },

    howToFix: {
      description:
        "Find the affected internal link and update its destination to a valid URL that is relevant to the page content.",

      fixes: [
        {
          stack: "next.js-app",

          label: "Next.js (App Router)",

          description:
            "If you are using the Next.js App Router, update the href of the Link component to point to the correct internal route.",

          code: {
            language: "tsx",

            code: `import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/products/seo-audit">
        SEO Audit
      </Link>
    </main>
  );
}`,
          },
        },

        {
          stack: "next.js-page",

          label: "Next.js (Pages Router)",

          description:
            "If you are using the Next.js Pages Router, update the Link component so that it points to the correct internal route.",

          code: {
            language: "tsx",

            code: `import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/products/seo-audit">
        SEO Audit
      </Link>
    </main>
  );
}`,
          },
        },

        {
          stack: "react",

          label: "React",

          description:
            "Update the internal link so that its destination matches a valid route in your React application.",

          code: {
            language: "jsx",

            code: `export default function Page() {
  return (
    <main>
      <a href="/products/seo-audit">
        SEO Audit
      </a>
    </main>
  );
}`,
          },
        },

        {
          stack: "html",

          label: "HTML",

          description:
            "Update the href attribute of the affected anchor element to point to a valid internal URL.",

          code: {
            language: "html",

            code: `<a href="/products/seo-audit">
  SEO Audit
</a>`,
          },
        },
      ],
    },

    affectedPages: {
      count: 9,

      pages: [
        {
          pageId: "page_002",
          url: "https://example.com/products",
          title: "Products - SEO Audit Tool",
        },
        {
          pageId: "page_003",
          url: "https://example.com/products/seo-audit",
          title: "SEO Audit - Products - SEO Audit Tool",
        },
        {
          pageId: "page_004",
          url: "https://example.com/products/site-crawler",
          title: "Site Crawler - Products - SEO Audit Tool",
        },
        {
          pageId: "page_005",
          url: "https://example.com/features",
          title: "Features - SEO Audit Tool",
        },
        {
          pageId: "page_006",
          url: "https://example.com/features/technical-seo",
          title: "Technical SEO - Features - SEO Audit Tool",
        },
        {
          pageId: "page_007",
          url: "https://example.com/pricing",
          title: "Pricing - SEO Audit Tool",
        },
        {
          pageId: "page_010",
          url: "https://example.com/blog",
          title: "Blog - SEO Audit Tool",
        },
        {
          pageId: "page_011",
          url: "https://example.com/blog/technical-seo",
          title: "Technical SEO - Blog - SEO Audit Tool",
        },
        {
          pageId: "page_013",
          url: "https://example.com/resources",
          title: "Resources - SEO Audit Tool",
        },
      ],
    },

    detected: new Date("2026-08-12T09:42:00Z"),

    crawlCount: 3,
  },
];
