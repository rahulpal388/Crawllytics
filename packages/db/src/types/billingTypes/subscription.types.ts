import { PlanLimits, PlanPricing } from "./plans.type.js";
import { Types } from "mongoose";

export enum SubscriptionStatus {
  ACTIVE = "active",
  CANCELED = "canceled",
  UNACTIVE = "unactive",
  INCOMPLETE = "incomplete",
  REPLACED = "replaced",
}

export enum PaymentProvider {
  NONE = "none",
  STRIPE = "stripe",
}
export type SubscriptionStatusType = `${SubscriptionStatus}`;

export type PaymentProviderType = `${PaymentProvider}`;

// snapshot of the plan at the time of subscription creation
export interface SubscriptionPlanSnapshot {
  name: string;
  slug: string;
  pricing: PlanPricing[];
  limits: PlanLimits;
}

export interface SubscriptionPeriod {
  startDate: Date;
  endDate: Date | null;
}

export interface SubscriptionSchemaType {
  userId: Types.ObjectId;
  planId: Types.ObjectId;

  // Immutable snapshot of purchased entitlements
  planSnapshot: SubscriptionPlanSnapshot;

  status: SubscriptionStatusType;

  currentPeriod: SubscriptionPeriod;
  // External payment gateway references
  provider: PaymentProviderType;
  providerCustomerId: string | null;
  providerSubscriptionId: string | null;

  createdAt: Date;
  updatedAt: Date;
}
