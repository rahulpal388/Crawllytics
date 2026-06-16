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
    text: { type: String, required: true },
    lengthChar: { type: Number, required: true },
    lengthPixel: { type: Number, required: true },
};

const htmlMetaDescriptionSchemaDefinition: SchemaOf<HTMLMetaDescriptionType> = {
    text: { type: String, required: true },
    lengthChar: { type: Number, required: true },
    lengthPixel: { type: Number, required: true },
};

const htmlMetaRobotSchemaDefinition: SchemaOf<HTMLMetaRobotType> = {
    content: { type: String, required: true },
};

const htmlCanonicalSchemaDefinition: SchemaOf<HTMLCanonicalType> = {
    url: { type: String, required: true },
    isSelf: { type: Boolean, required: true },
    isCrossPage: { type: Boolean, required: true },
    isCrossDomain: { type: Boolean, required: true },
    isAbsoluteUrl: { type: Boolean, required: true },
};

const htmlOpenGraphSchemaDefinition: SchemaOf<HTMLOpenGraphType> = {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageWidth: { type: String, required: true },
    imageHeight: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, required: true },
    siteName: { type: String, required: true },
    locale: { type: String, required: true },
};

const htmlMetaViewportSchemaDefinition: SchemaOf<HTMLMetaViewportType> = {
    value: { type: String, required: true },
    isMobileReady: { type: Boolean, required: true },
    hasInitialScale: { type: Boolean, required: true },
};

const hreflangSchemaDefinition: SchemaOf<HreflangType> = {
    lang: { type: String, required: true },
    href: { type: String, required: true },
    hrefStatusCode: { type: Number, required: true },
    isReturn: { type: Boolean, required: true },
    region: { type: String, default: null },
};

const paginationSchemaDefinition: SchemaOf<PaginationType> = {
    prev: { type: String, default: null },
    next: { type: String, default: null },
};

const twitterCardSchemaDefinition: SchemaOf<TwitterCardType> = {
    card: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    site: { type: String, required: true },
    creator: { type: String, required: true },
};

const faviconSchemaDefinition: SchemaOf<FaviconType> = {
    href: { type: String, required: true },
    type: { type: String, required: true },
    sizes: { type: String, required: true },
};

const resourceHintSchemaDefinition: SchemaOf<ResourceHintType> = {
    rel: {
        type: String,
        enum: ["preload", "prefetch", "dns-prefetch", "preconnect"],
        required: true,
    },
    href: { type: String, required: true },
    as: { type: String, default: null },
};

// ---------------- SCHEMAS ----------------

const htmlTitleSchema = new mongoose.Schema<HTMLTitleType>(
    htmlTitleSchemaDefinition,
    { _id: false, versionKey: false }
);

const htmlMetaDescriptionSchema = new mongoose.Schema<HTMLMetaDescriptionType>(
    htmlMetaDescriptionSchemaDefinition,
    { _id: false, versionKey: false }
);

const htmlMetaRobotSchema = new mongoose.Schema<HTMLMetaRobotType>(
    htmlMetaRobotSchemaDefinition,
    { _id: false, versionKey: false }
);

const htmlCanonicalSchema = new mongoose.Schema<HTMLCanonicalType>(
    htmlCanonicalSchemaDefinition,
    { _id: false, versionKey: false }
);

const htmlOpenGraphSchema = new mongoose.Schema<HTMLOpenGraphType>(
    htmlOpenGraphSchemaDefinition,
    { _id: false, versionKey: false }
);

const htmlMetaViewportSchema = new mongoose.Schema<HTMLMetaViewportType>(
    htmlMetaViewportSchemaDefinition,
    { _id: false, versionKey: false }
);

const hreflangSchema = new mongoose.Schema<HreflangType>(
    hreflangSchemaDefinition,
    { _id: false, versionKey: false }
);

const paginationSchema = new mongoose.Schema<PaginationType>(
    paginationSchemaDefinition,
    { _id: false, versionKey: false }
);

const twitterCardSchema = new mongoose.Schema<TwitterCardType>(
    twitterCardSchemaDefinition,
    { _id: false, versionKey: false }
);

const faviconSchema = new mongoose.Schema<FaviconType>(
    faviconSchemaDefinition,
    { _id: false, versionKey: false }
);

const resourceHintSchema = new mongoose.Schema<ResourceHintType>(
    resourceHintSchemaDefinition,
    { _id: false, versionKey: false }
);


// ---------------- HTMLHeader SCHEMA DEFINITION ----------------

const headerInformationSchemaDefinition: SchemaOf<HTMLHeaderType> = {
    title: { type: [htmlTitleSchema], required: true },
    meta: {
        metaDescription: { type: [htmlMetaDescriptionSchema], required: true },
        metaRobot: { type: htmlMetaRobotSchema, required: true },
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

export const headerInformationSchema = new mongoose.Schema<HTMLHeaderType>(headerInformationSchemaDefinition, { _id: false, versionKey: false, strict: true });