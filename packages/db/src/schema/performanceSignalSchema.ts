import {
  PerformanceSignalType,
  ScriptType,
  StylesheetType,
  LcpCandidateType,
  ResourceHintCoverage,
} from "@repo/config/types/urlInformationType/performanceSignalTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";

const scriptSchemaDefination: SchemaOf<ScriptType> = {
  src: { type: String, default: null },
  isInline: { type: Boolean },
  isAsync: { type: Boolean },
  isDefer: { type: Boolean },
  isModule: { type: Boolean },
  isRenderBlocking: { type: Boolean },
  isThirdParty: { type: Boolean },
  domain: { type: String, default: null },
};

const stylesheetSchemaDefination: SchemaOf<StylesheetType> = {
  href: { type: String, default: null },
  isInline: { type: Boolean },
  isRenderBlocking: { type: Boolean },
  media: { type: String, default: null },
};

const lcpCandidateSchemaDefination: SchemaOf<LcpCandidateType> = {
  type: { type: String, enum: ["image", "text"] },
  src: { type: String, default: null },
  isPreloaded: { type: Boolean },
  hasEagerLoading: { type: Boolean },
};

const resourceHintCoverageSchemaDefination: SchemaOf<ResourceHintCoverage> = {
  preconnectCount: { type: Number },
  preloadCount: { type: Number },
  prefetchCount: { type: Number },
  thirdPartyOriginsWithoutHint: { type: [String], default: [] },
};

const scriptSchema = new Schema<ScriptType>(scriptSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
const stylesheetSchema = new Schema<StylesheetType>(stylesheetSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
const lcpCandidateSchema = new Schema<LcpCandidateType>(lcpCandidateSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
const resourceHintCoverageSchema = new Schema<ResourceHintCoverage>(
  resourceHintCoverageSchemaDefination,
  { _id: false, versionKey: false, strict: true },
);

const performanceSignalSchemaDefination: SchemaOf<PerformanceSignalType> = {
  scripts: { type: [scriptSchema] },
  stylesheets: { type: [stylesheetSchema] },
  renderBlockingScripts: { type: Number },
  renderBlockingCss: { type: Number },
  totalScriptCount: { type: Number },
  inlineScriptCount: { type: Number },
  totalScriptSizeBytes: { type: Number },
  lcpCandidate: { type: [lcpCandidateSchema] },
  resourceHintCoverage: { type: resourceHintCoverageSchema },
  inlineCssBytes: { type: Number },
  totalCssFiles: { type: Number },
  estimatedTbtMs: { type: Number },
  hasServiceWorker: { type: Boolean },
  hasPwaManifest: { type: Boolean },
};

export const performanceSignalSchema = new Schema<PerformanceSignalType>(
  performanceSignalSchemaDefination,
  { _id: false, versionKey: false, strict: true },
);
