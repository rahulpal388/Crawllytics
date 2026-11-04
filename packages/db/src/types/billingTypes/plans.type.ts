

export enum BillingInterval {
    MONTHLY = "monthly"
}

export enum PlanStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    ARCHIVED = "archived"
}

export type BillingIntervalType = typeof BillingInterval[keyof typeof BillingInterval];

export type PlanStatusType = typeof PlanStatus[keyof typeof PlanStatus];

export type PlanPricing = {
    interval: BillingIntervalType;
    amount: number;
    currency: string;
}

export interface PlanLimits {
    maxProjects: number;
    maxPagesPerCrawl: number;
    maxCrawlsPerMonth: number;
}


export interface PlanSchemaType {
    name: string;
    slug: string;
    description: string;
    status: PlanStatusType;
    pricing: PlanPricing[];
    limits: PlanLimits;
    isPopular: boolean;
    createdAt: Date;
    updatedAt: Date;
}