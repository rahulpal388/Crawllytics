import { UrlAnalysesType } from "@repo/config/types/urlInformationType/urlAnalysesTypes";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";

const urlAnalysesSchemaDefination: SchemaOf<UrlAnalysesType> = {
  urlLength: { type: Number },
  urlDepth: { type: Number },
  crawlDepth: { type: Number, default: 0 },
  isBlockedByRobotsTxt: { type: Boolean, default: false },
  hasQueryParams: { type: Boolean, default: false },
  queryParams: { type: [String], default: [] },
  hasFragment: { type: Boolean, default: false },
  hasUppercase: { type: Boolean, default: false },
  hasUnderscores: { type: Boolean, default: false },
  hasSpaces: { type: Boolean, default: false },
  hasNonAscii: { type: Boolean, default: false },
  hasFileExtension: { type: Boolean, default: false },
  fileExtension: { type: [String], default: [] },
  hasRepetitivePath: { type: Boolean, default: false },
  isInSitemap: { type: Boolean, default: false },
  isDiscoveredViaInternalLink: { type: Boolean, default: false },
  isDiscoveredViaSiteMap: { type: Boolean, default: false },
  domainExtension: { type: String, default: null },
};

export const urlAnalysesSchema = new Schema<UrlAnalysesType>(urlAnalysesSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
