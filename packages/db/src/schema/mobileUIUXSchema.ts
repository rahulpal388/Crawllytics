import { MobileUIUXType } from "@repo/config/types/urlInformationType/mobileUIUXTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";



const mobileUIUXSchemaDefination: SchemaOf<MobileUIUXType> = {
    hasMetaViewport: { type: Boolean, require: true },
    viewportIsMobileReady: { type: Boolean, require: true },
    touchIconPresent: { type: Boolean, require: true },
    fontScalingSupported: { type: Boolean, require: true },
    estimatedHorizontalScrollRisk: { type: Boolean, require: true },
    estimatedPopupPresence: { type: Boolean, require: true },
}


export const mobileUIUXSchema = new Schema<MobileUIUXType>(mobileUIUXSchemaDefination, { _id: false, versionKey: false, strict: true });