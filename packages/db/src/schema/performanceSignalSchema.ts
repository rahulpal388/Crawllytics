import { PerformanceSignalType, ScriptType, StylesheetType, LcpCandidateType, ResourceHintCoverage } from "@repo/config/types/urlInformationType/performanceSignalTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";


const scriptSchemaDefination: SchemaOf<ScriptType> = {
    src: { type: String, default: null },
    isInline: { type: Boolean, required: true },
    isAsync: { type: Boolean, required: true },
    isDefer: { type: Boolean, required: true },
    isModule: { type: Boolean, required: true },
    isRenderBlocking: { type: Boolean, required: true },
    isThirdParty: { type: Boolean, required: true },
    domain: { type: String, default: null },
}

const stylesheetSchemaDefination: SchemaOf<StylesheetType> = {
    href: { type: String, default: null },
    isInline: { type: Boolean, required: true },
    isRenderBlocking: { type: Boolean, required: true },
    media: { type: String, default: null },
}


const lcpCandidateSchemaDefination: SchemaOf<LcpCandidateType> = {
    type: { type: String, enum: ["image", "text"], required: true },
    src: { type: String, default: null },
    isPreloaded: { type: Boolean, required: true },
    hasEagerLoading: { type: Boolean, required: true },
}


const resourceHintCoverageSchemaDefination: SchemaOf<ResourceHintCoverage> = {
    preconnectCount: { type: Number, required: true },
    preloadCount: { type: Number, required: true },
    prefetchCount: { type: Number, required: true },
    thirdPartyOriginsWithoutHint: { type: [String], default: [] },
}

const scriptSchema = new Schema<ScriptType>(scriptSchemaDefination, { _id: false, versionKey: false, strict: true });
const stylesheetSchema = new Schema<StylesheetType>(stylesheetSchemaDefination, { _id: false, versionKey: false, strict: true });
const lcpCandidateSchema = new Schema<LcpCandidateType>(lcpCandidateSchemaDefination, { _id: false, versionKey: false, strict: true });
const resourceHintCoverageSchema = new Schema<ResourceHintCoverage>(resourceHintCoverageSchemaDefination, { _id: false, versionKey: false, strict: true });


const performanceSignalSchemaDefination: SchemaOf<PerformanceSignalType> = {
    scripts: { type: [scriptSchema] },
    stylesheets: { type: [stylesheetSchema] },
    renderBlockingScripts: { type: Number, required: true },
    renderBlockingCss: { type: Number, required: true },
    totalScriptCount: { type: Number, required: true },
    inlineScriptCount: { type: Number, required: true },
    totalScriptSizeBytes: { type: Number, required: true },
    lcpCandidate: { type: [lcpCandidateSchema] },
    resourceHintCoverage: { type: resourceHintCoverageSchema, required: true },
    inlineCssBytes: { type: Number, required: true },
    totalCssFiles: { type: Number, required: true },
    estimatedTbtMs: { type: Number, required: true },
    hasServiceWorker: { type: Boolean, required: true },
    hasPwaManifest: { type: Boolean, required: true },


}


export const performanceSignalSchema = new Schema<PerformanceSignalType>(performanceSignalSchemaDefination, { _id: false, versionKey: false, strict: true });