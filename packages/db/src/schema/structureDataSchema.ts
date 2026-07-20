import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import {
  JsonLdBlockType,
  BreadcrumbItemType,
  HTMLStructureDataType,
} from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

const jsonLdBlockSchemaDefination: SchemaOf<JsonLdBlockType> = {
  rawJson: { type: String },
  parsedJson: { type: Schema.Types.Mixed, default: null },
  schemaType: { type: [String], default: null },
  context: { type: String, default: null },
  id: { type: String, default: null },
  isParsable: { type: Boolean, default: false },
  parseErrors: { type: [String], default: [] },
};

const breadCrumbSchemaDefination: SchemaOf<BreadcrumbItemType> = {
  position: { type: Number },
  name: { type: String },
  url: { type: String },
};

const jsonLdBlockSchema = new Schema<JsonLdBlockType>(jsonLdBlockSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
const breadCrumbSchema = new Schema<BreadcrumbItemType>(breadCrumbSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});

const htmlStructureDataSchemaDefination: SchemaOf<HTMLStructureDataType> = {
  jsonLdBlocks: { type: [jsonLdBlockSchema], default: [] },
  breadcrumbs: { type: [breadCrumbSchema], default: [] },
  schemaTypes: { type: [String], default: [] },
  hasMicrodata: { type: Boolean, default: false },
  hasRdfa: { type: Boolean, default: false },
  faqCount: { type: Number, default: 0 },
  organizationName: { type: String, default: null },
  organizationLogo: { type: String, default: null },
  websiteName: { type: String, default: null },
  articleAuthor: { type: String, default: null },
  articlePublishedTime: { type: String, default: null },
  articleModifiedTime: { type: String, default: null },
  productCount: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  videoCount: { type: Number, default: 0 },
  eventCount: { type: Number, default: 0 },
  localBusinessCount: { type: Number, default: 0 },
  personCount: { type: Number, default: 0 },
};

export const htmlStructureDataSchema = new Schema<HTMLStructureDataType>(
  htmlStructureDataSchemaDefination,
  { _id: false, versionKey: false, strict: true },
);
