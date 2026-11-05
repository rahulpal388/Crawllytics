import { PlanSchemaType } from "@repo/db/types/billingTypes/plans.type";

export const SELF_HOSTED_PLANS = {
  name: "Self Hosted",
  slug: "self_host",

  description: "Self-hosted Crawllytics instance with administrator-controlled limits.",

  features: [
    "Self-hosted deployment",
    "Complete SEO analysis features",
    "Unlimited projects",
    "Configurable pages per crawl",
    "Configurable crawl limits",
    "Download reports in PDF",
    "Download reports in Excel",
    "Download reports in CSV",
    "Full instance administration",
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
    maxProjects: null,
    maxPagesPerCrawl: 1000,
    maxCrawlsPerMonth: null,
  },

  isPopular: false,
  isEditable: true,
} satisfies Omit<PlanSchemaType, "createdAt" | "updatedAt">;
