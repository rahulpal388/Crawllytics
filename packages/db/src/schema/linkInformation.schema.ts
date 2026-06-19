import mongoose from "mongoose";
import { HTMLLinksType, InternalLinkType, ExternalLinkType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";



const internalLinkSchemaDefination: SchemaOf<InternalLinkType> = {
    url: { type: String },
    anchorText: { type: String },
    isImage: { type: Boolean },
    altText: { type: String, default: null },
    relAttributes: { type: String },
    isDoFollow: { type: Boolean },
}

const externalLinkSchemaDefination: SchemaOf<ExternalLinkType> = {
    url: { type: String },
    anchorText: { type: String },
    isImage: { type: Boolean },
    altText: { type: String, default: null },
    relAttributes: { type: String},
    isNoFollow: { type: Boolean },
    isSponsored: { type: Boolean },
    isUGC: { type: Boolean },
    domain: { type: String, default: null },
}


const internalLinkSchema = new mongoose.Schema<InternalLinkType>(internalLinkSchemaDefination, { _id: false, versionKey: false, strict: true });

const externalLinkSchema = new mongoose.Schema<ExternalLinkType>(externalLinkSchemaDefination, { _id: false, versionKey: false, strict: true });

const htmlLinksSchemaDefination: SchemaOf<HTMLLinksType> = {
    internalLinks: { type: [internalLinkSchema], default: [] },
    externalLinks: { type: [externalLinkSchema], default: [] },
    totalLinksCount: { type: Number },
    emptyAnchorTextCount: { type: Number },
    imageAnchorCount: { type: Number },
    nofollowInternalCount: { type: Number },
}


export const htmlLinksSchema = new mongoose.Schema<HTMLLinksType>(htmlLinksSchemaDefination, { _id: false, versionKey: false, strict: true });