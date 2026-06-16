import mongoose from "mongoose";
import { HTMLLinksType, InternalLinkType, ExternalLinkType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";



const internalLinkSchemaDefination: SchemaOf<InternalLinkType> = {
    url: { type: String, required: true },
    anchorText: { type: String, required: true },
    isImage: { type: Boolean, required: true },
    altText: { type: String, default: null },
    relAttributes: { type: String, require: true },
    isDoFollow: { type: Boolean, required: true },
}

const externalLinkSchemaDefination: SchemaOf<ExternalLinkType> = {
    url: { type: String, required: true },
    anchorText: { type: String, required: true },
    isImage: { type: Boolean, required: true },
    altText: { type: String, default: null },
    relAttributes: { type: String, require: true },
    isNoFollow: { type: Boolean, required: true },
    isSponsored: { type: Boolean, required: true },
    isUGC: { type: Boolean, required: true },
    domain: { type: String, default: null },
}


const internalLinkSchema = new mongoose.Schema<InternalLinkType>(internalLinkSchemaDefination, { _id: false, versionKey: false, strict: true });

const externalLinkSchema = new mongoose.Schema<ExternalLinkType>(externalLinkSchemaDefination, { _id: false, versionKey: false, strict: true });

const htmlLinksSchemaDefination: SchemaOf<HTMLLinksType> = {
    internalLinks: { type: [internalLinkSchema], default: [] },
    externalLinks: { type: [externalLinkSchema], default: [] },
    totalLinksCount: { type: Number, required: true },
    emptyAnchorTextCount: { type: Number, required: true },
    imageAnchorCount: { type: Number, required: true },
    nofollowInternalCount: { type: Number, required: true },
}


export const htmlLinksSchema = new mongoose.Schema<HTMLLinksType>(htmlLinksSchemaDefination, { _id: false, versionKey: false, strict: true });