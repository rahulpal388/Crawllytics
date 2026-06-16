import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";


const htmlDocumentSchemaDefinition: SchemaOf<HTMLDocumentType> = {
    htmlLang: { type: String, required: true },
    charSet: { type: String, required: true },
    htmlSizeBytes: { type: Number, required: true },
    textHtmlRatio: { type: Number, required: true },
    iFrameCount: { type: Number, required: true },
    iFrameSrc: { type: [String], required: true },
    hasFlash: { type: Boolean, required: true },
    jsFrameworks: { type: [String], required: true }
}


export const htmlDocumentSchema = new Schema<HTMLDocumentType>(htmlDocumentSchemaDefinition, { _id: false, versionKey: false, strict: true });