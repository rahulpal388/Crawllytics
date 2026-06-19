import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";


const htmlDocumentSchemaDefinition: SchemaOf<HTMLDocumentType> = {
    htmlLang: { type: String },
    charSet: { type: String },
    htmlSizeBytes: { type: Number },
    textHtmlRatio: { type: Number },
    iFrameCount: { type: Number },
    iFrameSrc: { type: [String] },
    hasFlash: { type: Boolean },
    jsFrameworks: { type: [String] }
}


export const htmlDocumentSchema = new Schema<HTMLDocumentType>(htmlDocumentSchemaDefinition, { _id: false, versionKey: false, strict: true });