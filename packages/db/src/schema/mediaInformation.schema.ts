import mongoose from "mongoose";
import { HTMLMediaTypes, ImageType, VideoType } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";


const imageSchemaDefination: mongoose.SchemaDefinition<ImageType> = {
    src: { type: String },
    altText: { type: String },
    altLength: { type: Number },
    hasAlt: { type: Boolean },
    widthDeclared: { type: Boolean },
    heightDeclared: { type: Boolean },
    loading: { type: String, enum: ["lazy", "eager"], default: null },
    fetchPriority: { type: String, enum: ["high", "low", "auto"], default: null },
    decoding: { type: String, enum: ["async", "sync", "auto"], default: null },
    format: { type: String, default: null },
    fileSizeBytes: { type: Number, default: null },
    isPreloaded: { type: Boolean },

}


const videoSchemaDefination: mongoose.SchemaDefinition<VideoType> = {
    src: { type: String },
    type: { type: String, default: null },
    autoPlay: { type: Boolean },
    controls: { type: Boolean },
    muted: { type: Boolean },
    preload: { type: String, enum: ['auto', 'metadata', 'none'], default: null },
    hasCaptions: { type: Boolean },
    hasTranscript: { type: Boolean },
    isEmbedded: { type: Boolean },
    embedProvider: { type: String, enum: ["youtube", "vimeo"], default: null },
}


const imageSchema = new mongoose.Schema<ImageType>(imageSchemaDefination, { _id: false, versionKey: false, strict: true });

const videoSchema = new mongoose.Schema<VideoType>(videoSchemaDefination, { _id: false, versionKey: false, strict: true });


const htmlMediaSchemaDefination: SchemaOf<HTMLMediaTypes> = {
    images: { type: [imageSchema], default: [] },
    videos: { type: [videoSchema], default: [] },
    imagesMissingAlt: { type: Number },
    imagesMissingDimensions: { type: Number },
    imagesNotLazy: { type: Number },
    notWebpOrAvif: { type: Number },
    totalImageSize: { type: Number },
}

export const htmlMediaSchema = new mongoose.Schema<HTMLMediaTypes>(htmlMediaSchemaDefination, { _id: false, versionKey: false, strict: true });
