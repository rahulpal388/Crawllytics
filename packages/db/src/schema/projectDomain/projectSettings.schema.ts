import mongoose from "mongoose";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import {
  ProjectCrawlerSettings,
  ProjectDiscoverySettings,
  ProjectReportSettings,
  ProjectSettingSchemaType,
} from "../../types/projectType/projectSetting.Types.js";
import { ReportFormat } from "../../types/projectType/report.Types.js";
import { DEFAULT_USER_AGENT } from "@repo/contracts/constant/fetchHeaderConfig";


const reportSettingsSchemaDefinition: SchemaOf<ProjectReportSettings> = {
  sendReport: { type: Boolean, default: false },
  format: { type: String, enum: Object.values(ReportFormat), default: ReportFormat.PDF },
}

const discoverySettingsSchemaDefinition: SchemaOf<ProjectDiscoverySettings> = {
  respectRobotsTxt: { type: Boolean, default: true },
  robotsTxtUrl: { type: String, default: null },

  crawlSitemap: { type: Boolean, default: true },
  sitemapUrls: { type: [String], default: [] },
}
const crawlerSettingsSchemaDefinition: SchemaOf<ProjectCrawlerSettings> = {
  userAgent: { type: String, default: DEFAULT_USER_AGENT },
}




const reportSettingsSchema = new mongoose.Schema<ProjectReportSettings>(
  reportSettingsSchemaDefinition,
  { _id: false, versionKey: false, strict: false },
);

const discoverySettingsSchema = new mongoose.Schema<ProjectDiscoverySettings>(
  discoverySettingsSchemaDefinition,
  { _id: false, versionKey: false, strict: false },
);

const crawlerSettingsSchema = new mongoose.Schema<ProjectCrawlerSettings>(
  crawlerSettingsSchemaDefinition,
  { _id: false, versionKey: false, strict: false },
);


// #########################################
// Project Settings Schema
// #########################################


const projectSettingsSchemaDefinition: SchemaOf<ProjectSettingSchemaType> = {
  projectId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Project" },
  report: { type: reportSettingsSchema, default: null },
  discovery: { type: discoverySettingsSchema, default: null },
  crawler: { type: crawlerSettingsSchema, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
};

const ProjectSettingsSchema = new mongoose.Schema<ProjectSettingSchemaType>(
  projectSettingsSchemaDefinition,
  { timestamps: true },
);

export default ProjectSettingsSchema;
