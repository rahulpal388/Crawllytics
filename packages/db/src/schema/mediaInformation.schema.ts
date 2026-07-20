import mongoose from "mongoose";
import { HTMLMediaTypes } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlMediaTypes";
import { HTMLAudioType } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlAudioType";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { imageSchema } from "./imageSchame.js";
import { videoSchema } from "./videoSchema.js";

const audioSchemaDefination: mongoose.SchemaDefinition<HTMLAudioType> = {
  src: { type: String },
  type: { type: String, default: null },
  controls: { type: Boolean, default: false },
  autoplay: { type: Boolean, default: false },
  preload: { type: String, enum: ["auto", "metadata", "none"], default: null },
};

const audioSchema = new mongoose.Schema<HTMLAudioType>(audioSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});

const htmlMediaSchemaDefination: SchemaOf<HTMLMediaTypes> = {
  images: { type: [imageSchema], default: [] },
  videos: { type: [videoSchema], default: [] },
  audios: { type: [audioSchema], default: [] },
};

export const htmlMediaSchema = new mongoose.Schema<HTMLMediaTypes>(htmlMediaSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
