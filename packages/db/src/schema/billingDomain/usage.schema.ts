
import mongoose, { Schema } from "mongoose";
import { UsageCounter, UsageSchemaType } from "../../types/billingTypes/usage.types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";


const UsageCounterSchemaDefinition: SchemaOf<UsageCounter> = {
    consumed: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
    limit: {
        type: Number,
        required: true,
        min: 0,
    },
}

const UsageCounterSchema = new Schema<UsageCounter>(UsageCounterSchemaDefinition, {
    _id: false,
    versionKey: false,
    timestamps: false
})



// Usage Schema Definition

const UsageSchemaDefinition: SchemaOf<UsageSchemaType> = {
    subscriptionId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Subscriptions",
    },

    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    period: {
        type: {
            start: { type: Date, required: true },
            end: { type: Date, required: true },
        },
        required: true,
        validate: {
            validator: (value: { start: Date; end: Date }) =>
                value.end > value.start,
            message: "Period end must be after period start",
        }
    },

    periodic: {
        type: {
            crawlPerMonth: {
                type: UsageCounterSchema,
                required: true,
            },
            projects: {
                type: UsageCounterSchema,
                required: true,
            },
            pagesPerCrawl: {
                type: UsageCounterSchema,
                required: true,
            },
        },
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
};


const UsageSchema = new Schema<UsageSchemaType>(UsageSchemaDefinition);

export default UsageSchema;