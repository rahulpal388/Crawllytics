import { model } from "mongoose";
import PlanSchema from "../../schema/billingDomain/Plans.schema.js";



const PlanModel = model("Plans", PlanSchema);

export default PlanModel;