import mongoose from "mongoose";
import {
  HTMLCanonicalType,
  HTMLHeaderType,
  HTMLMetaDescriptionType,
  HTMLMetaRobotType,
  HTMLOpenGraphType,
  HTMLTitleType,
  HTMLMetaViewportType,
  HreflangType,
  PaginationType,
  TwitterCardType,
  FaviconType,
  ResourceHintType,
} from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";

const htmlTitleSchemaDefinition: SchemaOf<HTMLTitleType> = {
  text: { type: String },
  lengthChar: { type: Number },
  lengthPixel: { type: Number },
};

const htmlMetaDescriptionSchemaDefinition: SchemaOf<HTMLMetaDescriptionType> = {
  text: { type: String },
  lengthChar: { type: Number },
  lengthPixel: { type: Number },
};

const htmlCanonicalSchemaDefinition: SchemaOf<HTMLCanonicalType> = {
  url: { type: String },
  isSelf: { type: Boolean },
  isCrossPage: { type: Boolean },
  isCrossDomain: { type: Boolean },
  isAbsoluteUrl: { type: Boolean },
};

const htmlOpenGraphSchemaDefinition: SchemaOf<HTMLOpenGraphType> = {
  title: { type: String },
  description: { type: String },
  image: { type: String },
  imageWidth: { type: String },
  imageHeight: { type: String },
  url: { type: String },
  type: { type: String },
  siteName: { type: String },
  locale: { type: String },
};

const htmlMetaViewportSchemaDefinition: SchemaOf<HTMLMetaViewportType> = {
  value: { type: String },
  isMobileReady: { type: Boolean },
  hasInitialScale: { type: Boolean },
};

const hreflangSchemaDefinition: SchemaOf<HreflangType> = {
  lang: { type: String },
  href: { type: String },
  hrefStatusCode: { type: Number },
  isReturn: { type: Boolean },
  region: { type: String, default: null },
};

const paginationSchemaDefinition: SchemaOf<PaginationType> = {
  prev: { type: String, default: null },
  next: { type: String, default: null },
};

const twitterCardSchemaDefinition: SchemaOf<TwitterCardType> = {
  card: { type: String },
  title: { type: String },
  description: { type: String },
  image: { type: String },
  site: { type: String },
  creator: { type: String },
};

const faviconSchemaDefinition: SchemaOf<FaviconType> = {
  href: { type: String },
  type: { type: String },
  sizes: { type: String },
};

const resourceHintSchemaDefinition: SchemaOf<ResourceHintType> = {
  rel: {
    type: String,
    enum: ["preload", "prefetch", "dns-prefetch", "preconnect"],
    required: true,
  },
  href: { type: String },
  as: { type: String, default: null },
};

// ---------------- SCHEMAS ----------------

const htmlTitleSchema = new mongoose.Schema<HTMLTitleType>(htmlTitleSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const htmlMetaDescriptionSchema = new mongoose.Schema<HTMLMetaDescriptionType>(
  htmlMetaDescriptionSchemaDefinition,
  { _id: false, versionKey: false },
);

const htmlCanonicalSchema = new mongoose.Schema<HTMLCanonicalType>(htmlCanonicalSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const htmlOpenGraphSchema = new mongoose.Schema<HTMLOpenGraphType>(htmlOpenGraphSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const htmlMetaViewportSchema = new mongoose.Schema<HTMLMetaViewportType>(
  htmlMetaViewportSchemaDefinition,
  { _id: false, versionKey: false },
);

const hreflangSchema = new mongoose.Schema<HreflangType>(hreflangSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const paginationSchema = new mongoose.Schema<PaginationType>(paginationSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const twitterCardSchema = new mongoose.Schema<TwitterCardType>(twitterCardSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const faviconSchema = new mongoose.Schema<FaviconType>(faviconSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const resourceHintSchema = new mongoose.Schema<ResourceHintType>(resourceHintSchemaDefinition, {
  _id: false,
  versionKey: false,
});

// ---------------- HTMLHeader SCHEMA DEFINITION ----------------

const headerInformationSchemaDefinition: SchemaOf<HTMLHeaderType> = {
  title: { type: [htmlTitleSchema], required: true },
  meta: {
    metaDescription: { type: [htmlMetaDescriptionSchema], required: true },
    metaRobot: [{ type: String, required: true }],
    Canonical: { type: [htmlCanonicalSchema], required: true },
    openGraph: { type: htmlOpenGraphSchema, required: true },
    metaViewport: { type: htmlMetaViewportSchema, required: true },
  },
  hreflang: { type: [hreflangSchema], required: true },
  pagination: { type: paginationSchema, required: true },
  twitterCard: { type: twitterCardSchema, required: true },
  favicon: { type: [faviconSchema], required: true },
  resourceHints: { type: [resourceHintSchema], required: true },
  sitename: {
    type: String,
    default: null,
  },
};

export const headerInformationSchema = new mongoose.Schema<HTMLHeaderType>(
  headerInformationSchemaDefinition,
  { _id: false, versionKey: false, strict: true },
);
