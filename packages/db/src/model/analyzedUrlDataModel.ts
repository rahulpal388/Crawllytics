import { model, Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { analyzedUrlDataType } from "../types/analyzedUrlDataType.js";

const analyzedUrlDataSchemaDefination: SchemaOf<analyzedUrlDataType> = {};

const analyzedUrlDataSchema = new Schema<analyzedUrlDataType>(analyzedUrlDataSchemaDefination);

export const analyzedUrlDataModel = model("AnalyzedUrlData", analyzedUrlDataSchema);
