import mongoose from "mongoose";
import { ReportSchemaType } from "../../types/projectType/report.Types.js";
import ReportSchema from "../../schema/projectDomain/report.schema.js";

const ReportModel = mongoose.model<ReportSchemaType>("Report", ReportSchema);

export default ReportModel;
