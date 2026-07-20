import {
  EachUrlNetworkResultTypes,
  RedirectChainType,
} from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { Schema } from "mongoose";
import { ResponseHeaderSchema } from "./responseHeaderSchema.js";
import { SchemaOf } from "../types/schemaOfTypes.js";

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
  url: { type: String },

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

  uncompressedSize: {
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
    type: String,
    default: null,
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
