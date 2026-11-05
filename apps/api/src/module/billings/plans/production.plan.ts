import type { PlanSchemaType } from "@repo/db/types/billingTypes/plans.type";

export const PRODUCTION_PLANS: Omit<PlanSchemaType, "createdAt" | "updatedAt">[] = [
  {
    name: "Free",
    slug: "free",
    description: "Get started with website SEO auditing and discover technical issues.",

    features: [
      "1 website project",
      "300 pages per crawl",
      "2 crawls per month across your account",
      "Complete SEO analysis features",
      "Download reports in PDF",
      "Download reports in Excel",
      "Download reports in CSV",
    ],

    status: "active",

    pricing: [
      {
        interval: "monthly",
        amount: 0,
        currencyCode: "INR",
      },
    ],

    limits: {
      maxProjects: 1,
      maxPagesPerCrawl: 300,
      maxCrawlsPerMonth: 2,
    },

    isPopular: false,
    isEditable: false,
  },

  {
    name: "Starter",
    slug: "starter",
    description: "For individuals and freelancers managing multiple websites.",

    features: [
      "Up to 3 website projects",
      "1,000 pages per crawl",
      "4 crawls per month per project",
      "Complete SEO analysis features",
      "Download reports in PDF",
      "Download reports in Excel",
      "Download reports in CSV",
    ],

    status: "active",

    pricing: [
      {
        interval: "monthly",
        amount: 149,
        currencyCode: "INR",
      },
      {
        interval: "monthly",
        amount: 4,
        currencyCode: "USD",
      },
    ],

    limits: {
      maxProjects: 3,
      maxPagesPerCrawl: 1000,
      maxCrawlsPerMonth: 4,
    },

    isPopular: true,
    isEditable: false,
  },

  {
    name: "Pro",
    slug: "pro",
    description: "For SEO professionals and agencies managing larger website portfolios.",

    features: [
      "Up to 10 website projects",
      "5,000 pages per crawl",
      "4 crawls per month per project",
      "Complete SEO analysis features",
      "Download reports in PDF",
      "Download reports in Excel",
      "Download reports in CSV",
    ],

    status: "active",

    pricing: [
      {
        interval: "monthly",
        amount: 449,
        currencyCode: "INR",
      },
      {
        interval: "monthly",
        amount: 12,
        currencyCode: "USD",
      },
    ],

    limits: {
      maxProjects: 10,
      maxPagesPerCrawl: 3000,
      maxCrawlsPerMonth: 4,
    },

    isPopular: false,
    isEditable: false,
  },
];
