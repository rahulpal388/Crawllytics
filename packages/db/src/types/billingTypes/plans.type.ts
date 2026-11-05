export enum BillingInterval {
  MONTHLY = "monthly",
}

export enum PlanStatus {
  DRAFT = "draft",
  ACTIVE = "active",
  ARCHIVED = "archived",
}

export type CurrencyCode = "INR" | "USD";

// export type BillingIntervalType = typeof BillingInterval[keyof typeof BillingInterval];

export type PlanStatusType = `${PlanStatus}`;

export type BillingIntervalType = `${BillingInterval}`;

export type PlanPricing = {
  interval: BillingIntervalType;
  amount: number;
  currencyCode: CurrencyCode;
};

export interface PlanLimits {
  maxProjects: number | null;
  maxPagesPerCrawl: number;
  maxCrawlsPerMonth: number | null;
}

export interface PlanSchemaType {
  name: string;
  slug: string;
  description: string;
  features: string[];
  status: PlanStatusType;
  pricing: PlanPricing[];
  limits: PlanLimits;
  isPopular: boolean;
  isEditable: boolean;
}
