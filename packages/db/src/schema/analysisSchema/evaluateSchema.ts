import { EvaluateType, FindingsType, IssueType } from "@repo/config/types/analysesTypes/evaluteTypes";
import { PageAnalysisType } from "../../types/pageAnalysisType.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";
import { RecommendationType, DocumentationLinkType } from "@repo/config/types/analysesTypes/recommendationTypes";


const documentationLinkSchemaDefinition: SchemaOf<DocumentationLinkType> = {
    title: { type: String, required: true },
    url: { type: String, required: true }
}

const documentationLinkSchema = new mongoose.Schema<DocumentationLinkType>(documentationLinkSchemaDefinition, { _id: false, timestamps: false, versionKey: false, strict: true });

const issuesSchemaDefinition: SchemaOf<IssueType> = {
    code: { type: String, required: true },
    title: { type: String, required: true },
    severity: { type: String, required: true }
};



const recommendationSchemaDefinition: SchemaOf<RecommendationType> = {
    title: { type: String, required: true },
    description: { type: String, required: true },
    whyItMatters: { type: String, required: true },
    howToFix: { type: [String], required: true },
    documentationLinks: { type: [documentationLinkSchema], default: [] }
}

const issuesSchema = new mongoose.Schema<IssueType>(issuesSchemaDefinition, { _id: false, timestamps: false, versionKey: false, strict: true });

const recommendationSchema = new mongoose.Schema<RecommendationType>(recommendationSchemaDefinition, { _id: false, timestamps: false, versionKey: false, strict: true });

const findingsSchemaDefination: SchemaOf<FindingsType> = {
    issues: {
        type: issuesSchema,
        required: true
    },
    recommendations: {
        type: recommendationSchema,
        required: true
    }
}



const findingsSchema = new mongoose.Schema(findingsSchemaDefination, { _id: false, timestamps: false, versionKey: false, strict: true });


const evaluateSchemaDefination: SchemaOf<EvaluateType> = {
    score: { type: Number, required: true },
    category: { type: String, required: true },
    findings: { type: [findingsSchema], default: [] }
}


export const evaluateSchema = new mongoose.Schema(evaluateSchemaDefination, { _id: false, timestamps: false, versionKey: false, strict: true });