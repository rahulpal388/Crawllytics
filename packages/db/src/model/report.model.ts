import mongoose from "mongoose";
import ReportSchema from "../schema/report/report.schema.js";
import { ReportSchemaType } from "../types/report.Types.js";

const ReportModel = mongoose.model<ReportSchemaType>("Report", ReportSchema);

export default ReportModel;
