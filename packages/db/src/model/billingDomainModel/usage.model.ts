
import { model } from "mongoose";
import UsageSchema from "../../schema/billingDomain/usage.schema.js";


const UsageModel = model("Usage", UsageSchema);

export default UsageModel;