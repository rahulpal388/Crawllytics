import { UrlAnalysesType } from "@repo/config/types/urlInformationType/urlAnalysesTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";


const urlAnalysesSchemaDefination: SchemaOf<UrlAnalysesType> = {
    urlLength: { type: Number, required: true },
    urlDepth: { type: Number, required: true },
    isBlockedByRobotsTxt: { type: Boolean, required: true },
    hasQueryParams: { type: Boolean, required: true },
    queryParams: { type: [String], required: true },
    hasFragment: { type: Boolean, required: true },
    hasUnderscores: { type: Boolean, required: true },
    hasUppercase: { type: Boolean, required: true },
    hasSpaces: { type: Boolean, required: true },
    hasNonAscii: { type: Boolean, required: true },
    hasFileExtension: { type: Boolean, required: true },
    fileExtension: { type: [String], required: true },
    hasRepetitivePath: { type: Boolean, required: true },
    domainExtension: { type: String, default: null },
}

export const urlAnalysesSchema = new Schema<UrlAnalysesType>(urlAnalysesSchemaDefination, { _id: false, versionKey: false, strict: true });