import mongoose from "mongoose";
import { BillingInterval, PlanStatus } from "../../types/billingTypes/plans.type.js";
import { PlanSchemaType } from "../../types/billingTypes/plans.type.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";

const pricingSchemaDefinition: SchemaOf<PlanSchemaType["pricing"][number]> = {
  interval: { type: String, enum: Object.values(BillingInterval), required: true },
  amount: { type: Number, required: true },
  currencyCode: { type: String, required: true },
};

const limitsSchemaDefinition: SchemaOf<PlanSchemaType["limits"]> = {
  maxProjects: { type: Number, default: null },
  maxPagesPerCrawl: { type: Number, required: true },
  maxCrawlsPerMonth: { type: Number, default: null },
};

const pricingSchema = new mongoose.Schema<PlanSchemaType["pricing"][number]>(
  pricingSchemaDefinition,
  { _id: false },
);
const limitsSchema = new mongoose.Schema<PlanSchemaType["limits"]>(limitsSchemaDefinition, {
  _id: false,
});

const planSchemaDefinition: SchemaOf<PlanSchemaType> = {
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, default: null },
  features: { type: [String], default: [] },
  status: { type: String, enum: Object.values(PlanStatus), required: true },
  pricing: { type: [pricingSchema], required: true },
  limits: { type: limitsSchema, required: true },
  isPopular: { type: Boolean, default: false },
  isEditable: { type: Boolean, default: false },
};

const PlanSchema = new mongoose.Schema<PlanSchemaType>(planSchemaDefinition);

export default PlanSchema;
