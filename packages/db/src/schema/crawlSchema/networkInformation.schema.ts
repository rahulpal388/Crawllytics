import { Schema } from "mongoose";
import { ResponseHeaderSchema } from "./responseHeaderSchema.js";
import { EachUrlNetworkResultTypes, FetchErrorCodes, RedirectChainType } from "@repo/contracts/types/crawl/urlCrawl/network/eachUrlNetworkTypes";
import { SchemaOf } from "../../types/schemaOfTypes.js";

const redirectChainSchemaDefinition: SchemaOf<RedirectChainType> = {
  sourceUrl: { type: String },
  redirectedTo: { type: String },
  statusCode: { type: Number },
};

const redirectChainSchema = new Schema<RedirectChainType>(redirectChainSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const urlNetworkDefinition: SchemaOf<EachUrlNetworkResultTypes> = {
  requestedUrl: { type: String },
  finalUrl: { type: String },
  statusCode: { type: Number },

  httpVersion: { type: String, enum: ["HTTP/1.0", "HTTP/1.1", "HTTP/2", "HTTP/3"] },

  method: { type: String },
  protocol: { type: String, enum: ["http", "https"] },

  dnsLookupTime: {
    type: Number,
  },

  tcpConnectTime: {
    type: Number,
  },

  tlsHandshakeTime: {
    type: Number,
  },

  timeToFirstByte: {
    type: Number,
  },

  totalResponseTime: {
    type: Number,
  },

  transferSize: {
    type: Number,
  },

  compressionEncoding: {
    type: String,
    enum: ["gzip", "br", "zstd", "deflate"],
    default: null,
  },

  redirectChain: {
    type: [redirectChainSchema],
    default: [],
  },

  isRedirectLoop: {
    type: Boolean,
  },

  isCompressed: {
    type: Boolean,
  },

  cdnProvider: {
    type: [String],
    default: [],
  },

  ipAddress: {
    type: String,
  },
  fetchError: {
    code: {
      type: String,
      enum: Object.values(FetchErrorCodes),
    },
    message: {
      type: String,
    },
  },
  connectionReused: {
    type: Boolean,
  },

  contentType: {
    type: String,
  },

  responseHeaders: {
    type: ResponseHeaderSchema,
  },
};

export const urlNetworkSchema = new Schema<EachUrlNetworkResultTypes>(urlNetworkDefinition, {
  _id: false,
  versionKey: false,
  strict: true,
});

