import { CacheControlType, HSTSType, ResponseHeadersType } from "@repo/config/types/urlInformationType/responseHeadersTypes";
import { Schema } from "mongoose";


const HSTSSchema = new Schema<HSTSType>(
    {
        value: { type: String, required: true },
        maxAge: { type: Number, required: true },
        includeSubdomains: { type: Boolean, default: false },
        preload: { type: Boolean, required: true },
    },
    { _id: false, versionKey: false }
);


const CacheControlSchema = new Schema<CacheControlType>(
    {
        maxAge: { type: Number, default: null },
        noCache: { type: Boolean, default: false },
        noStore: { type: Boolean, default: false },
        sMaxAge: { type: Number, default: null },
        mustRevalidate: { type: Boolean, default: false },
        isImmutable: { type: Boolean, default: false },
    },
    { _id: false, versionKey: false }
);

export const ResponseHeaderSchema = new Schema<ResponseHeadersType>(
    {
        hsts: { type: HSTSSchema, default: null },
        csp: { type: [String], default: [] },
        xFrameOptions: {
            type: String,
            enum: ['DENY', 'SAMEORIGIN'],
            default: null,
        },
        xContentTypeOptions: { type: Boolean, default: false },
        referrerPolicy: { type: String, default: null },
        permissionsPolicy: { type: String, default: null },
        xRobotsTag: { type: [String], default: [] },
        cacheControl: { type: CacheControlSchema, default: null },
        etag: { type: String, default: null },
        lastModified: { type: String, default: null },
        vary: { type: String, default: null },
    },
    {
        _id: false,
        versionKey: false,
        strict: true,
    }
);

