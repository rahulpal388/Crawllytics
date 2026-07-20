import { HTMLImageType } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlImagesType";
import mongoose from "mongoose";

const imageSchemaDefination: mongoose.SchemaDefinition<HTMLImageType> = {
  src: { type: String },
  absoluteUrl: { type: String },
  originalAttribute: { type: String, enum: ["src", "srcset", "picture"] },
  sourceTag: { type: String, enum: ["img", "picture", "svg", "canvas"] },
  altText: { type: String },
  altLength: { type: Number },
  hasAlt: { type: Boolean },
  isDecorative: { type: Boolean },
  title: { type: String, default: null },
  ariaLabel: { type: String, default: null },
  widthDeclared: { type: Boolean },
  heightDeclared: { type: Boolean },
  width: { type: Number, default: null },
  height: { type: Number, default: null },
  loading: { type: String, enum: ["lazy", "eager"], default: null },
  fetchPriority: { type: String, enum: ["high", "low", "auto"], default: null },
  decoding: { type: String, enum: ["async", "sync", "auto"], default: null },
  srcSet: { type: [String], default: [] },
  sizes: { type: String, default: null },
  responsive: { type: Boolean },
  insidePicture: { type: Boolean },
  extension: { type: String, default: null },
  mimeType: { type: String, default: null },
  format: {
    type: String,
    enum: ["jpg", "jpeg", "png", "gif", "svg", "webp", "avif", "bmp", "ico", "other"],
    default: null,
  },
  isAboveTheFold: { type: Boolean, default: null },
  isHeroImage: { type: Boolean },
  isBackgroundImage: { type: Boolean },
  filename: { type: String },
  filenameReadable: { type: Boolean },
  containsKeyword: { type: Boolean, default: null },
  isPreloaded: { type: Boolean },
};

export const imageSchema = new mongoose.Schema<HTMLImageType>(imageSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
