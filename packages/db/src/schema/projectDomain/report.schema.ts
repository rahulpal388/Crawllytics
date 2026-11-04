import {
  ReportFormat,
  ReportSchemaType,
  ReportStatus,
  ReportType,
} from "../../types/projectType/report.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";

const reportSchemaDefinition: SchemaOf<ReportSchemaType> = {
  projectId: { type: mongoose.Types.ObjectId, required: true, ref: "Project" },
  type: { type: String, enum: Object.values(ReportType), required: true },
  format: { type: String, enum: Object.values(ReportFormat), required: true },
  status: { type: String, enum: Object.values(ReportStatus), required: true },
  attempts: { type: Number, default: 0 },
  objectKey: { type: String, default: null },
  fileName: { type: String, default: null },
  fileSize: { type: Number, default: null },
  expiresAt: { type: Date, default: null },
  errorMessage: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
};

const ReportSchema = new mongoose.Schema<ReportSchemaType>(reportSchemaDefinition);

export default ReportSchema;
