import { SchemaOf } from "../../types/schemaOfTypes.js";
import { UrlCrawledSchemaType } from "../../types/crawlTypes/urlCrawledTypes.js";
import { model, Schema } from "mongoose";
import { accessibilitySchema } from "./accessibilitySchema.js";
import { htmlDocumentSchema } from "./htmlDocumentSchema.js";
import { urlNetworkSchema } from "./networkInformation.schema.js";
import { headerInformationSchema } from "./headerInformation.schema.js";
import { htmlHeadingContentsSchema } from "./htmlHeadingSchema.js";
import { htmlLinksSchema } from "./linkInformation.schema.js";
import { htmlStructureDataSchema } from "./structureDataSchema.js";
import { performanceSignalSchema } from "./performanceSignalSchema.js";
import { urlAnalysesSchema } from "./urlAnalysesSchema.js";
import { htmlMediaSchema } from "./mediaInformation.schema.js";
import { mobileUIUXSchema } from "./mobileUIUXSchema.js";

const urlCrawledSchemaDefinitation: SchemaOf<UrlCrawledSchemaType> = {
  projectId: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
  url: { type: String, required: true },
  networkInfo: { type: urlNetworkSchema, required: true },
  htmlHeader: { type: headerInformationSchema, default: null },
  htmlHeadingContent: { type: htmlHeadingContentsSchema, default: null },
  links: { type: [htmlLinksSchema], default: [] },
  media: { type: htmlMediaSchema, default: null },
  structureData: { type: htmlStructureDataSchema, default: null },
  mobileUIUX: { type: mobileUIUXSchema, default: null },
  urlAnalyses: { type: urlAnalysesSchema, default: null },
  performanceSignals: { type: performanceSignalSchema, default: null },
  htmlDocument: { type: htmlDocumentSchema, default: null },
  accessibility: { type: accessibilitySchema, default: null },
};

const UrlCrawledSchema = new Schema<UrlCrawledSchemaType>(urlCrawledSchemaDefinitation);

export default UrlCrawledSchema;
