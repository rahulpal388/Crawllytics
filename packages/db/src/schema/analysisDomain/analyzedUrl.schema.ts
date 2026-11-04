import { PageAnalysisSchemaType } from "../../types/analysisType/pageAnalysisType.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";

import mongoose from "mongoose";

const analyzedUrlSchemaDefinition: SchemaOf<PageAnalysisSchemaType> = {
  projectId: { type: mongoose.Types.ObjectId, required: true, ref: "Project" },
};

const AnalyzedUrlSchema = new mongoose.Schema<PageAnalysisSchemaType>(analyzedUrlSchemaDefinition);

export default AnalyzedUrlSchema;
