import { Schema } from "mongoose";
import { ResponseHeadersType } from "@repo/contracts/types/crawl/urlCrawl/network/responseHeadersTypes";
import { SchemaOf } from "../../types/schemaOfTypes.js";






export const responseHeaderSchemaDefinition: SchemaOf<ResponseHeadersType> = {
  // this browser tell to use https 
  hsts: { type: String, default: null },
  // CSP primarily protects against attacks such as XSS
  csp: { type: [String], default: [] },
  xFrameOptions: { type: [String], default: [] },
  xContentType: { type: [String], default: [] },
  referrerPolicy: { type: [String], default: [] },
  permissionsPolicy: { type: [String], default: [] },
  crossOriginOpenerPolicy: { type: [String], default: [] },
  crossOriginEmbedderPolicy: { type: [String], default: [] },
  crossOriginResourcePolicy: { type: [String], default: [] },
  xRobotsTag: { type: [String], default: [] },
  cacheControl: { type: String, default: null },
  etag: { type: String, default: null },
  lastModified: { type: String, default: null },
  vary: { type: String, default: null },
  server: { type: [String], default: [] },
}



export const ResponseHeaderSchema = new Schema<ResponseHeadersType>(responseHeaderSchemaDefinition,
  {
    _id: false,
    versionKey: false,
    strict: true,
  },
);

