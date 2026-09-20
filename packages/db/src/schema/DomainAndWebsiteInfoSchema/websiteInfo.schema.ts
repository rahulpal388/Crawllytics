import { WebsiteInformationType } from "@repo/contracts/types/crawl/domain-leve-information/websiteInformation.Types";

import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";

const websiteInfoSchemaDefinition: SchemaOf<WebsiteInformationType> = {
  websiteName: { type: String, default: null },
  domain: { type: String, required: true },
  ipAddress: { type: String, default: null },
  webServer: { type: [String], default: null },
  serverLocation: { type: String, default: null },
  favicons: { type: [String], default: [] },
  languages: { type: [String], default: null },
};

export const websiteInfoSchema = new mongoose.Schema<WebsiteInformationType>(
  websiteInfoSchemaDefinition,
  {
    _id: false,
    timestamps: false,
    versionKey: false,
  },
);
