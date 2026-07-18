import {
  EachUrlNetworkResultTypes,
  RedirectChainType,
} from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { Schema } from "mongoose";
import { ResponseHeaderSchema } from "./responseHeaderSchema.js";
import { SchemaOf } from "../types/schemaOfTypes.js";

const redirectChainSchemaDefinition: SchemaOf<RedirectChainType> = {
  sourceUrl: { type: String, required: true },
  redirectedTo: { type: String, required: true },
  statusCode: { type: Number, required: true },
};

const redirectChainSchema = new Schema<RedirectChainType>(redirectChainSchemaDefinition, {
  _id: false,
  versionKey: false,
});

const urlNetworkDefinition: SchemaOf<EachUrlNetworkResultTypes> = {
  url: { type: String, required: true },

  statusCode: { type: Number, required: true },

  httpVersion: { type: String, enum: ["HTTP/1.0", "HTTP/1.1", "HTTP/2", "HTTP/3"], required: true },

  method: { type: String, required: true },

  protocol: { type: String, enum: ["http", "https"], required: true },

  dnsLookupTime: {
    type: Number,
    required: true,
  },

  tcpConnectTime: {
    type: Number,
    required: true,
  },

  tlsHandshakeTime: {
    type: Number,
    required: true,
  },

  timeToFirstByte: {
    type: Number,
    required: true,
  },

  totalResponseTime: {
    type: Number,
    required: true,
  },

  transferSize: {
    type: Number,
    required: true,
  },

  uncompressedSize: {
    type: Number,
    required: true,
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
    required: true,
  },

  isCompressed: {
    type: Boolean,
    required: true,
  },

  cdnProvider: {
    type: String,
    default: null,
  },

  responseHeaders: {
    type: ResponseHeaderSchema,
    required: true,
  },
};

export const urlNetworkSchema = new Schema<EachUrlNetworkResultTypes>(urlNetworkDefinition, {
  _id: false,
  versionKey: false,
  strict: true,
});
