import { model } from "mongoose";
import LoginActivitySchema from "../../schema/userDomain/logActivity/logActivity.schema.js";

const logActivityModel = model("LogActivity", LoginActivitySchema);

export default logActivityModel;
