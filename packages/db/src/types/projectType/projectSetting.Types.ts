import mongoose from "mongoose";
import { ReportFormatType } from "./report.Types.js";

export interface ProjectReportSettings {
  sendReport: boolean;
  format: ReportFormatType;
}

export interface ProjectDiscoverySettings {
  respectRobotsTxt: boolean;
  robotsTxtUrl: string | null;

  crawlSitemap: boolean;
  sitemapUrls: string[];
}

export interface ProjectCrawlerSettings {
  userAgent: string;
}

export interface ProjectSettingSchemaType {
  projectId: mongoose.Types.ObjectId;
  report: ProjectReportSettings;
  discovery: ProjectDiscoverySettings;
  crawler: ProjectCrawlerSettings;
  createdAt: Date;
  updatedAt: Date;
}
