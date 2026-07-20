import { HTMLDocumentType } from "@repo/config/types/urlInformationType/htmlDocumentTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";

const htmlDocumentSchemaDefinition: SchemaOf<HTMLDocumentType> = {
  htmlLang: { type: String, default: null },
  charSet: { type: String, default: null },
  htmlSizeBytes: { type: Number },
  textHtmlRatio: { type: Number },
  domElementCount: { type: Number },
  hasMainTag: { type: Boolean, default: false },
  hasNoscript: { type: Boolean, default: false },
  hasInlineStyles: { type: Boolean, default: false },
  inlineScriptCount: { type: Number },
  iFrameCount: { type: Number },
  iFrameSrc: { type: [String] },
  hasFlash: { type: Boolean, default: false },
  jsFrameworks: { type: [String] },
};

export const htmlDocumentSchema = new Schema<HTMLDocumentType>(htmlDocumentSchemaDefinition, {
  _id: false,
  versionKey: false,
  strict: true,
});
