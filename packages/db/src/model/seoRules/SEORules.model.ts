


import mongoose from "mongoose";
import { SEORulesSchema } from "../../schema/seoRules/SEORules.schema.js";
import { SEORules } from "@repo/contracts/types/analysesTypes/SEORules.Type";




const SEORulesModel = mongoose.model<SEORules<string>>("SEORules", SEORulesSchema);

export default SEORulesModel;