import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import {
  HTMLHeadingType,
  HTMLContentType,
  HTMLHeadingContentType,
} from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";

const htmlHeadingSchemaDefination: SchemaOf<HTMLHeadingType> = {
  level: { type: Number },
  text: { type: String },
  characterCount: { type: Number },
  wordCount: { type: Number },
  id: { type: String, default: null },
  position: { type: Number }, // order in document
  hasAnchor: { type: Boolean, default: false },
};

const htmlContentSchemaDefination: SchemaOf<HTMLContentType> = {
  visibleText: { type: String },
  language: { type: String, default: null },
  contentHash: { type: String },
};

const htmlHeadingSchema = new Schema<HTMLHeadingType>(htmlHeadingSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});

const htmlHeadingContentsSchemaDefination: SchemaOf<HTMLHeadingContentType> = {
  headings: { type: [htmlHeadingSchema], required: true },
  content: { type: htmlContentSchemaDefination, required: true },
};

export const htmlHeadingContentsSchema = new Schema<HTMLHeadingContentType>(
  htmlHeadingContentsSchemaDefination,
  { _id: false, versionKey: false, strict: true },
);
