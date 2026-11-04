import { model, Schema } from "mongoose";
import AnalyzedUrlSchema from "../../schema/analysisDomain/analyzedUrl.schema.js";

const AnalyzedUrlDataModel = model("Analysis", AnalyzedUrlSchema);

export default AnalyzedUrlDataModel;
