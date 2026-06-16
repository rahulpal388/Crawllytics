import mongoose from "mongoose";
import { HTMLMediaTypes, ImageType, VideoType } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";


const imageSchemaDefination: mongoose.SchemaDefinition<ImageType> = {
    src: { type: String, required: true },
    altText: { type: String, required: true },
    altLength: { type: Number, required: true },
    hasAlt: { type: Boolean, required: true },
    widthDeclared: { type: Boolean, required: true },
    heightDeclared: { type: Boolean, required: true },
    loading: { type: String, enum: ["lazy", "eager"], default: null },
    fetchPriority: { type: String, enum: ["high", "low", "auto"], default: null },
    decoding: { type: String, enum: ["async", "sync", "auto"], default: null },
    format: { type: String, default: null },
    fileSizeBytes: { type: Number, default: null },
    isPreloaded: { type: Boolean, required: true },

}


const videoSchemaDefination: mongoose.SchemaDefinition<VideoType> = {
    src: { type: String, required: true },
    type: { type: String, default: null },
    autoPlay: { type: Boolean, required: true },
    controls: { type: Boolean, required: true },
    muted: { type: Boolean, required: true },
    preload: { type: String, enum: ['auto', 'metadata', 'none'], default: null },
    hasCaptions: { type: Boolean, required: true },
    hasTranscript: { type: Boolean, required: true },
    isEmbedded: { type: Boolean, required: true },
    embedProvider: { type: String, enum: ["youtube", "vimeo"], default: null },
}


const imageSchema = new mongoose.Schema<ImageType>(imageSchemaDefination, { _id: false, versionKey: false, strict: true });

const videoSchema = new mongoose.Schema<VideoType>(videoSchemaDefination, { _id: false, versionKey: false, strict: true });


const htmlMediaSchemaDefination: SchemaOf<HTMLMediaTypes> = {
    images: { type: [imageSchema], default: [] },
    videos: { type: [videoSchema], default: [] },
    imagesMissingAlt: { type: Number, required: true },
    imagesMissingDimensions: { type: Number, required: true },
    imagesNotLazy: { type: Number, required: true },
    notWebpOrAvif: { type: Number, required: true },
    totalImageSize: { type: Number, required: true },
}

export const htmlMediaSchema = new mongoose.Schema<HTMLMediaTypes>(htmlMediaSchemaDefination, { _id: false, versionKey: false, strict: true });
