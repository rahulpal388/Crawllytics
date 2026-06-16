import { SchemaOf } from "../types/schemaOfTypes.js"
import { AccessibilityType } from "@repo/config/types/urlInformationType/accessibilityTypes"
import { Schema } from "mongoose"

const accessibilitySchemaDefinition: SchemaOf<AccessibilityType> = {
    formsWithoutLabels: { type: Number, required: true },
    buttonsWithoutText: { type: Number, required: true },
    langDeclared: { type: Boolean, required: true },
    tablesMissingHeaders: { type: Number, required: true }
}



export const accessibilitySchema = new Schema<AccessibilityType>(accessibilitySchemaDefinition, { _id: false, versionKey: false, strict: true });