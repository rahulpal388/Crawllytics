import { SchemaOf } from "../types/schemaOfTypes.js";
import { UrlCrawledType } from "../types/urlCrawledTypes.js";
import { model, Schema } from "mongoose";
import { accessibilitySchema } from "../schema/accessibilitySchema.js"
import { htmlDocumentSchema } from "../schema/htmlDocumentSchema.js";
import { urlNetworkSchema } from "../schema/networkInformation.schema.js";
import { headerInformationSchema } from "../schema/headerInformation.schema.js";
import { htmlHeadingContentsSchema } from "../schema/htmlHeadingSchema.js";
import { htmlLinksSchema } from "../schema/linkInformation.schema.js";
import { htmlMediaSchema } from "../schema/mediaInformation.schema.js";
import { htmlStructureDataSchema } from "../schema/structureDataSchema.js";
import { mobileUIUXSchema } from "../schema/mobileUIUXSchema.js";
import { performanceSignalSchema } from "../schema/performanceSignalSchema.js"
import { urlAnalysesSchema } from "../schema/urlAnalysesSchema.js";


const urlCrawledSchemaDefinitation: SchemaOf<UrlCrawledType> = {
    networkInfo: { type: urlNetworkSchema, required: true },
    htmlHeader: { type: headerInformationSchema, required: true },
    htmlHeadingContent: { type: htmlHeadingContentsSchema, required: true },
    links: { type: htmlLinksSchema, required: true },
    media: { type: htmlMediaSchema, required: true },
    structureData: { type: htmlStructureDataSchema, required: true },
    mobileUIUX: { type: mobileUIUXSchema, required: true },
    urlAnalyses: { type: urlAnalysesSchema, required: true },
    performanceSignals: { type: performanceSignalSchema, required: true },
    htmlDocument: { type: htmlDocumentSchema, required: true },
    accessibility: { type: accessibilitySchema, required: true },
    analyzedUrlData: { type: Schema.Types.ObjectId, ref: "AnalyzedUrlData", default: null }

}

export const urlCrawledSchema = new Schema<UrlCrawledType>(urlCrawledSchemaDefinitation)


export const urlCrawledModel = model("UrlCrawled", urlCrawledSchema);