import mongoose from "mongoose";
import { BillingInterval, PlanStatus } from "../../types/billingTypes/plans.type.js";
import { PlanSchemaType } from "../../types/billingTypes/plans.type.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";





const planSchemaDefinition: SchemaOf<PlanSchemaType> = {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: null },
    status: { type: String, enum: Object.values(PlanStatus), required: true },
    pricing: {
        type: [
            {
                interval: { type: String, enum: Object.values(BillingInterval), required: true },
                amount: { type: Number, required: true },
                currency: { type: String, required: true },
            },
        ],
        default: [],
    },
    limits: {
        type: {
            projectsLimit: { type: Number, default: null },
            crawlsLimitPerProjectPerMonth: { type: Number, default: null },
            reportsLimitPerProjectPerMonth: { type: Number, default: null },
            usersLimitPerProjectPerMonth: { type: Number, default: null },
        },
        default: {},
    },
    isPopular: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
};



const PlanSchema = new mongoose.Schema<PlanSchemaType>(planSchemaDefinition);

export default PlanSchema;