import { SchemaOf } from "../types/schemaOfTypes.js";
import { AccessibilityType } from "../../../../contracts/src/types/urlInformationType/accessibilityTypes.js";
import { Schema } from "mongoose";

const accessibilitySchemaDefinition: SchemaOf<AccessibilityType> = {
  formsWithoutLabels: { type: Number },
  buttonsWithoutText: { type: Number },
  langDeclared: { type: Boolean },
  tablesMissingHeaders: { type: Number },
};

export const accessibilitySchema = new Schema<AccessibilityType>(accessibilitySchemaDefinition, {
  _id: false,
  versionKey: false,
  strict: true,
});
