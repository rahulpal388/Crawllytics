import mongoose from "mongoose";
import {
  HTMLCanonicalType,
  HTMLHeaderType,
  HTMLMetaDescriptionType,
  HTMLOpenGraphType,
  HTMLTitleType,
  HTMLMetaViewportType,
  HreflangType,
  TwitterCardType,
  FaviconType,
  ResourceHintType,
  HTMLAlternateType,
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
  isRelativeUrl: { type: Boolean },
  isHttps: { type: Boolean },
  isValidUrl: { type: Boolean },
};

const htmlAlternateSchemaDefinition: SchemaOf<HTMLAlternateType> = {
  href: { type: String },
  hreflang: { type: String, default: null },
  type: { type: String, default: null },
  media: { type: String, default: null },
  title: { type: String, default: null },
  as: { type: String, default: null },
  crossOrigin: { type: String, default: null },
};

const htmlOpenGraphSchemaDefinition: SchemaOf<HTMLOpenGraphType> = {
  title: { type: String, default: null },
  description: { type: String, default: null },
  image: { type: [String] },
  audio: { type: [String] },
  video: { type: [String] },
  imageWidth: { type: Number, default: null },
  imageHeight: { type: Number, default: null },
  imageAlt: { type: String, default: null },
  imageType: { type: String, default: null },
  url: { type: String, default: null },
  type: { type: String, default: null },
  siteName: { type: String, default: null },
  locale: { type: String, default: null },
};

const htmlMetaViewportSchemaDefinition: SchemaOf<HTMLMetaViewportType> = {
  value: { type: String },
  width: { type: String, default: null },
  initialScale: { type: Number, default: null },
  minimumScale: { type: Number, default: null },
  maximumScale: { type: Number, default: null },
  userScalable: { type: String, default: null },
  viewportFit: { type: String, default: null },
  interactiveWidget: { type: String, default: null },
};

const hreflangSchemaDefinition: SchemaOf<HreflangType> = {
  hreflang: { type: String },
  language: { type: String, default: null },
  region: { type: String, default: null },
  href: { type: String },
  hrefStatusCode: { type: Number, default: null },
  isReturn: { type: Boolean, default: false },
  isDefault: { type: Boolean, default: false },
  isValidLanguage: { type: Boolean, default: false },
  isAbsoluteUrl: { type: Boolean, default: false },
};

const twitterCardSchemaDefinition: SchemaOf<TwitterCardType> = {
  card: { type: String },
  title: { type: String },
  description: { type: String },
  image: { type: String },
  site: { type: String },
  creator: { type: String },
  imageAlt: { type: String, default: null },
  player: {
    playerUrl: { type: String },
    width: { type: Number },
    height: { type: Number },
    streamUrl: { type: String, default: null },
    streamContentType: { type: String, default: null },
  },
};

const faviconSchemaDefinition: SchemaOf<FaviconType> = {
  href: { type: String },
  type: { type: String, default: null },
  sizes: { type: String, default: null },
  rel: { type: String, default: null },
};

const resourceHintSchemaDefinition: SchemaOf<ResourceHintType> = {
  rel: {
    type: String,
    required: true,
  },
  href: { type: String },
  as: { type: String, default: null },
  type: { type: String, default: null },
  media: { type: String, default: null },
  crossOrigin: { type: String, default: null },
  fetchPriority: { type: String, default: null },
  imageSrcSet: { type: String, default: null },
  imageSizes: { type: String, default: null },
  disabled: { type: Boolean, default: false },
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

const twitterCardSchema = new mongoose.Schema<TwitterCardType>(twitterCardSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const faviconSchema = new mongoose.Schema<FaviconType>(faviconSchemaDefinition, {
  _id: false,
  versionKey: false,
});
const htmlAlternateSchema = new mongoose.Schema<HTMLAlternateType>(htmlAlternateSchemaDefinition, {
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
    metaRobot: [{ type: [String], required: true }],
    Canonical: { type: [htmlCanonicalSchema], required: true },
    openGraph: { type: htmlOpenGraphSchema, required: true },
    metaViewport: { type: [htmlMetaViewportSchema], required: true },
  },
  hreflang: { type: [hreflangSchema], required: true },
  twitterCard: { type: twitterCardSchema, required: true },
  favicon: { type: [faviconSchema], required: true },
  resourceHints: { type: [resourceHintSchema], required: true },
  sitename: { type: String, default: null },
  alternate: { type: [htmlAlternateSchema], required: true },
  manifest: { type: String, default: null },
};

export const headerInformationSchema = new mongoose.Schema<HTMLHeaderType>(
  headerInformationSchemaDefinition,
  { _id: false, versionKey: false, strict: true },
);
