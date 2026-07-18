import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import {
  JsonLdBlock,
  BreadcrumbItem,
  HTMLStructureDataType,
} from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

const jsonLdBlockSchemaDefination: SchemaOf<JsonLdBlock> = {
  rawJson: { type: String, required: true },
  schemaType: { type: String, default: null },
  isValid: { type: Boolean, required: true },
  errors: { type: [String], default: [] },
  warnings: { type: [String], default: [] },
};

const breadCrumbSchemaDefination: SchemaOf<BreadcrumbItem> = {
  url: { type: String, require: true },
  name: { type: String, require: true },
  position: { type: Number, require: true },
};

const jsonLdBlockSchema = new Schema<JsonLdBlock>(jsonLdBlockSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
const breadCrumbSchema = new Schema<BreadcrumbItem>(breadCrumbSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});

const htmlStructureDataSchemaDefination: SchemaOf<HTMLStructureDataType> = {
  JsonLdBlocks: { type: [jsonLdBlockSchema], default: [] },
  schemaTypes: { type: [String], default: [] },
  hasMicroData: { type: Boolean, require: true },
  hasRdfa: { type: Boolean, require: true },
  richResultEligible: { type: [String], default: [] },
  breadcrumbs: { type: [breadCrumbSchema], default: [] },
  faqCount: { type: Number, require: true },
};

export const htmlStructureDataSchema = new Schema<HTMLStructureDataType>(
  htmlStructureDataSchemaDefination,
  { _id: false, versionKey: false, strict: true },
);
