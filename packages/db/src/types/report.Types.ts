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

export type ReportSchemaType = {
  projectId: mongoose.Types.ObjectId;
  crawlId: mongoose.Types.ObjectId;
  requestedBy: mongoose.Types.ObjectId;

  type: ReportType;

  format: ReportFormatType;

  status: ReportStatus;

  objectKey: string | null;

  fileName: string | null;

  fileSize: number | null;

  errorMessage: string | null;

  createdAt: Date;
  completedAt: Date | null;
};
