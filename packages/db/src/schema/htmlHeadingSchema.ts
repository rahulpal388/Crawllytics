import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import {
  HTMLHeadingType,
  HTMLHeadingContentsType,
} from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";

const htmlHeadingSchemaDefination: SchemaOf<HTMLHeadingType> = {
  text: { type: String },
  charLength: { type: Number },
  wordCount: { type: Number },
};

const htmlHeadingSchema = new Schema<HTMLHeadingType>(htmlHeadingSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});

const htmlHeadingContentsSchemaDefination: SchemaOf<HTMLHeadingContentsType> = {
  h1: { type: [htmlHeadingSchema], default: [] },
  h2: { type: [htmlHeadingSchema], default: [] },
  h3H6: { type: [htmlHeadingSchema], default: [] },
  count: {
    wordCount: { type: Number },
    paragraphCount: { type: Number },
  },
};

export const htmlHeadingContentsSchema = new Schema<HTMLHeadingContentsType>(
  htmlHeadingContentsSchemaDefination,
  { _id: false, versionKey: false, strict: true },
);
