import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { UserAgentType } from "@repo/config/types/robotsTxtType";


const userAgentSchemaDefinition: SchemaOf<UserAgentType> = {
    userAgent: [{ type: String, required: true }],
    allow: [{ type: String, required: true }],
    disallow: [{ type: String, required: true }]
}


export const userAgentSchema = new Schema<UserAgentType>(userAgentSchemaDefinition, { _id: false, versionKey: false, strict: false });