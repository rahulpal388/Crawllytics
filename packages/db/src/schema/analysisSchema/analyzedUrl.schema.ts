import { SchemaOf } from "../../types/schemaOfTypes.js";
import { AnalyzedUrlType } from "../../types/analyzedUrlDataType.js";

import mongoose from "mongoose";

const analyzedUrlSchemaDefinition: SchemaOf<AnalyzedUrlType> = {
  crawlId: { type: mongoose.Types.ObjectId, required: true, ref: "Crawl" },
};

const AnalyzedUrlSchema = new mongoose.Schema<AnalyzedUrlType>(analyzedUrlSchemaDefinition);

export default AnalyzedUrlSchema;
