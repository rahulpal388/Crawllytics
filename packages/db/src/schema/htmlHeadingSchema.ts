import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { HTMLHeadingType, HTMLHeadingContentsType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";


const htmlHeadingSchemaDefination: SchemaOf<HTMLHeadingType> = {
    text: { type: String, required: true },
    charLength: { type: Number, required: true },
    wordCount: { type: Number, required: true },
}

const htmlHeadingSchema = new Schema<HTMLHeadingType>(htmlHeadingSchemaDefination, { _id: false, versionKey: false, strict: true });

const htmlHeadingContentsSchemaDefination: SchemaOf<HTMLHeadingContentsType> = {
    h1: { type: [htmlHeadingSchema], default: [] },
    h2: { type: [htmlHeadingSchema], default: [] },
    h3H6: { type: [htmlHeadingSchema], default: [] },
    count: {
        wordCount: { type: Number, required: true },
        paragraphCount: { type: Number, required: true },
    }
}

export const htmlHeadingContentsSchema = new Schema<HTMLHeadingContentsType>(htmlHeadingContentsSchemaDefination, { _id: false, versionKey: false, strict: true });