import { SchemaOf } from "../../types/schemaOfTypes.js";
import { HowToFixType, SEORules } from "@repo/contracts/types/analysesTypes/SEORules.Type";

import mongoose from "mongoose";

const HowToFixSchemaDefinition: SchemaOf<HowToFixType> = {
    description: { type: String, required: true },
    fixes: {
        type: [{
            stack: { type: String, required: true },
            label: { type: String, required: true },
            description: { type: String, required: true },
            code: {
                type: {
                    language: { type: String, required: true },
                    value: { type: String, required: true }
                },
                required: true
            }
        }],
        required: true
    }
};


const HowToFixSchema = new mongoose.Schema<HowToFixType>(HowToFixSchemaDefinition, { _id: false, versionKey: false });

const SEORulesDefinitions: SchemaOf<SEORules<string>> = {
    ruleId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    whyItMatters: { type: String, required: true },
    recommendation: {
        type: {
            description: { type: String, required: true },
            steps: { type: [String], required: true }
        },
        required: true
    },
    howToFix: {
        type: HowToFixSchema,
        default: null
    },
    fix: { type: String, required: true }
}


export const SEORulesSchema = new mongoose.Schema<SEORules<string>>(SEORulesDefinitions, { _id: false, versionKey: false }); 