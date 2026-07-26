import { model, Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { analyzedUrlDataType } from "../types/analyzedUrlDataType.js";
import { pageAnalysisSchema } from "../schema/analysisSchema/pageAnalysisSchema.js";

const analyzedUrlDataSchemaDefination: SchemaOf<analyzedUrlDataType> = {
    pageAnalysis: { type: pageAnalysisSchema, required: true }
};

const analyzedUrlDataSchema = new Schema<analyzedUrlDataType>(analyzedUrlDataSchemaDefination);

export const analyzedUrlDataModel = model("AnalyzedUrlData", analyzedUrlDataSchema);
