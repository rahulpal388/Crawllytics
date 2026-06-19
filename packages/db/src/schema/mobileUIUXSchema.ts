import { MobileUIUXType } from "@repo/config/types/urlInformationType/mobileUIUXTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";



const mobileUIUXSchemaDefination: SchemaOf<MobileUIUXType> = {
    hasMetaViewport: { type: Boolean },
    viewportIsMobileReady: { type: Boolean },
    touchIconPresent: { type: Boolean },
    fontScalingSupported: { type: Boolean },
    estimatedHorizontalScrollRisk: { type: Boolean },
    estimatedPopupPresence: { type: Boolean },
}


export const mobileUIUXSchema = new Schema<MobileUIUXType>(mobileUIUXSchemaDefination, { _id: false, versionKey: false, strict: true });