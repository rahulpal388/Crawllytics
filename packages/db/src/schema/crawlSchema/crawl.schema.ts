import { SchemaOf } from "../../types/schemaOfTypes.js";
import { UrlCrawledType } from "../../types/urlCrawledTypes.js";
import { model, Schema } from "mongoose";
import { accessibilitySchema } from "../../schema/crawlSchema/accessibilitySchema.js";
import { htmlDocumentSchema } from "../../schema/crawlSchema/htmlDocumentSchema.js";
import { urlNetworkSchema } from "../../schema/crawlSchema/networkInformation.schema.js";
import { headerInformationSchema } from "../../schema/crawlSchema/headerInformation.schema.js";
import { htmlHeadingContentsSchema } from "../../schema/crawlSchema/htmlHeadingSchema.js";
import { htmlLinksSchema } from "../../schema/crawlSchema/linkInformation.schema.js";
import { htmlStructureDataSchema } from "../../schema/crawlSchema/structureDataSchema.js";
import { performanceSignalSchema } from "../../schema/crawlSchema/performanceSignalSchema.js";
import { urlAnalysesSchema } from "../../schema/crawlSchema/urlAnalysesSchema.js";
import { htmlMediaSchema } from "../../schema/crawlSchema/mediaInformation.schema.js";
import { mobileUIUXSchema } from "../../schema/crawlSchema/mobileUIUXSchema.js";

const urlCrawledSchemaDefinitation: SchemaOf<UrlCrawledType> = {
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

const UrlCrawledSchema = new Schema<UrlCrawledType>(urlCrawledSchemaDefinitation);

export default UrlCrawledSchema;
