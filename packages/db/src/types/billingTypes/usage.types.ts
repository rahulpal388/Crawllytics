import { Types } from "mongoose";

export type UsageMatrix = "crawlPerMonth" | "projects" | "pagesPerCrawl";

export type UsageCounter = {
  consumed: number;
  limit: number;
};

export type PeriodicUsage = Record<UsageMatrix, UsageCounter>;

export interface UsagePeriod {
  start: Date;
  end: Date;
}

export interface UsageSchemaType {
  subscriptionId: Types.ObjectId;
  userId: Types.ObjectId;

  period: UsagePeriod;

  periodic: PeriodicUsage;

  createdAt: Date;
  updatedAt: Date;
}
