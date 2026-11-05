import mongoose from "mongoose";

export enum ReportType {
  SEO_AUDIT = "seo_audit",
}

export const ReportFormat = {
  PDF: "pdf",
  CSV: "csv",
} as const;

export type ReportFormatType = (typeof ReportFormat)[keyof typeof ReportFormat];

export enum ReportStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  COMPLETED = "completed",
  FAILED = "failed",
}

export interface ReportSchemaType {
  projectId: mongoose.Types.ObjectId;

  type: ReportType;
  format: ReportFormatType;

  status: ReportStatus;
  attempts: number;

  // File storage
  objectKey: string | null;
  fileName: string | null;
  fileSize: number | null;

  // Retention
  expiresAt: Date | null;

  // Error handling
  errorMessage: string | null;

  createdAt: Date;
  updatedAt: Date;
}
