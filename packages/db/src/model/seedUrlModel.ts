import { model, Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { SeedUrlType } from "../types/seedUrlType.js";
import { userAgentSchema } from "../schema/userAgentSchema.js";


const seedUrlSchemaDefination: SchemaOf<SeedUrlType> = {
    status: { type: Boolean, required: true },
    robotsTxt: [{ type: userAgentSchema, required: true }],
    siteMapXMLUrls: [{ type: String, required: true }],
    urlCrawled: [{ type: Schema.Types.ObjectId, ref: "UrlCrawled" }],
    analyzedData: { type: Schema.Types.ObjectId, ref: "AnalyzedData", default: null }
}


const seedUrlSchema = new Schema<SeedUrlType>(seedUrlSchemaDefination);

export const seedUrlModel = model("SeedUrl", seedUrlSchema);