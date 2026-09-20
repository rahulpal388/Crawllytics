import { model, Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import AnalyzedUrlSchema from "../schema/analysisSchema/analyzedUrl.schema.js";

const AnalyzedUrlDataModel = model("AnalyzedUrlData", AnalyzedUrlSchema);

export default AnalyzedUrlDataModel;
