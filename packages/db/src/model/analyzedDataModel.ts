import { model, Schema } from "mongoose";
import { analyzedDataType } from "../types/analyzedDataType.js";
import { SchemaOf } from "../types/schemaOfTypes.js";


const analyzedDataSchemaDefination: SchemaOf<analyzedDataType> = {};



const analyzedDataSchema = new Schema(analyzedDataSchemaDefination);


export const analyzedDataModel = model("AnalyzedData", analyzedDataSchema);