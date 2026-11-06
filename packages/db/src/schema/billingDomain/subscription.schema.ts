import {
  PaymentProvider,
  SubscriptionPlanSnapshot,
  SubscriptionSchemaType,
  SubscriptionStatus,
} from "../../types/billingTypes/subscription.types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";

const PlanSnapshotSchemaDefinition: SchemaOf<SubscriptionPlanSnapshot> = {
  name: { type: String, required: true },
  slug: { type: String, required: true },
  pricing: {
    type: [{
      interval: { type: String, enum: Object.values(PaymentProvider), required: true },
      amount: { type: Number, required: true },
      currency: { type: String, required: true },
    }],
    required: true,
  },
  limits: {
    type: {
      projectsLimit: { type: Number, default: null },
      crawlsLimitPerProjectPerMonth: { type: Number, default: null },
      reportsLimitPerProjectPerMonth: { type: Number, default: null },
      usersLimitPerProjectPerMonth: { type: Number, default: null },
    },
    required: true,
  },
};

const PlanSnapshot = new mongoose.Schema<SubscriptionPlanSnapshot>(PlanSnapshotSchemaDefinition, {
  _id: false,
  versionKey: false,
  strict: false,
});

// Subscription Schema Definition

const subscriptionSchemaDefinition: SchemaOf<SubscriptionSchemaType> = {
  userId: { type: String, required: true, ref: "User" },
  planId: { type: String, required: true, ref: "Plans" },
  planSnapshot: { type: PlanSnapshot, required: true },
  status: { type: String, enum: Object.values(SubscriptionStatus), required: true },
  currentPeriod: {
    type: {
      start: { type: Date, required: true },
      end: { type: Date, default: null },
    },
    required: true,
  },
  provider: { type: String, enum: Object.values(PaymentProvider), default: null },
  providerCustomerId: { type: String, default: null },
  providerSubscriptionId: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
};

const SubscriptionSchema = new mongoose.Schema<SubscriptionSchemaType>(
  subscriptionSchemaDefinition,
);

export default SubscriptionSchema;
