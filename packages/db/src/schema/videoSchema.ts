import mongoose from "mongoose";
import { HTMLVideoType } from "@repo/config/types/urlInformationType/HTMLMediaTypes/htmlVideoType";

const videoSchemaDefination: mongoose.SchemaDefinition<HTMLVideoType> = {
  src: { type: String, required: true },
  absoluteUrl: { type: String, required: true },
  type: { type: String, default: null },
  controls: { type: Boolean },
  autoPlay: { type: Boolean },
  muted: { type: Boolean },
  loop: { type: Boolean },
  playsInline: { type: Boolean },
  preload: { type: String, enum: ["auto", "metadata", "none"], default: null },
  poster: { type: String, default: null },
  width: { type: Number, default: null },
  height: { type: Number, default: null },
  duration: { type: Number, default: null },
  fileSizeBytes: { type: Number, default: null },
  hasCaptions: { type: Boolean },
  captionLanguages: { type: [String], default: [] },
  hasTranscript: { type: Boolean },
  isEmbedded: { type: Boolean },
  embedProvider: {
    type: String,
    enum: ["youtube", "vimeo", "wistia", "loom", "other"],
    default: null,
  },
  embedUrl: { type: String, default: null },
};

export const videoSchema = new mongoose.Schema<HTMLVideoType>(videoSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
