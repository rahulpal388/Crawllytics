import {
  ReportFormat,
  ReportSchemaType,
  ReportStatus,
  ReportType,
} from "../../types/report.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";

const reportSchemaDefinition: SchemaOf<ReportSchemaType> = {
  projectId: { type: mongoose.Types.ObjectId, required: true, ref: "Project" },
  crawlId: { type: mongoose.Types.ObjectId, required: true, ref: "Crawl" },
  /*
   * requestedBy : store the user id who requested the report
   */
  requestedBy: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  type: { type: String, enum: Object.values(ReportType), required: true },
  format: { type: String, enum: Object.values(ReportFormat), required: true },
  status: { type: String, enum: Object.values(ReportStatus), required: true },
  objectKey: { type: String, default: null },
  fileName: { type: String, default: null },
  fileSize: { type: Number, default: null },
  errorMessage: { type: String, default: null },
  createdAt: { type: Date, deafault: Date.now },
  completedAt: { type: Date, default: null },
};

const ReportSchema = new mongoose.Schema<ReportSchemaType>(reportSchemaDefinition);

export default ReportSchema;
