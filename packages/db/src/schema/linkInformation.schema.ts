import mongoose from "mongoose";
import { HTMLLinksType, HTMLLinkType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";

const linkSchemaDefination: SchemaOf<HTMLLinkType> = {
  url: { type: String },
  absoluteUrl: { type: String },
  anchorText: { type: String },
  isImage: { type: Boolean, default: false },
  altText: { type: String, default: null },
  relAttributes: { type: [String], default: [] },
  linkType: { type: String },
  target: { type: String, default: null },
  title: { type: String, default: null },
  hreflang: { type: String, default: null },
  type: { type: String, default: null },
  isInternal: { type: Boolean },
  isDoFollow: { type: Boolean, default: true },
  isSponsored: { type: Boolean, default: false },
  isUGC: { type: Boolean, default: false },
  isNoOpener: { type: Boolean, default: false },
  isNoReferrer: { type: Boolean, default: false },
  isDownload: { type: Boolean, default: false },
  domain: { type: String, default: null },
  protocol: { type: String, enum: ["http", "https", null], default: null },
  position: { type: Number },
  html: { type: String },
};

export const htmlLinksSchema = new mongoose.Schema<HTMLLinkType>(linkSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
