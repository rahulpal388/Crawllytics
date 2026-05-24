
import mongoose from "mongoose";


export const ResponseHeaderSchema = new mongoose.Schema({
    contentType: { type: String, default: null },
    cacheControl: { type: String, default: null },
    contentLength: { type: Number, default: null },
    server: { type: [String], default: null },
    xRobotsTag: { type: [String], default: null },
})
export type ResponseHeaderType = mongoose.InferSchemaType<typeof ResponseHeaderSchema>;
export const networkInformationSchema = new mongoose.Schema({
    url: { type: String, required: true },
    statusCode: { type: Number, default: null },
    method: { type: String, default: null },
    protocol: { type: String, default: null },
    redirectTo: { type: String, default: null },
    timeToFirstByte: { type: Number, default: null },
    responseTime: { type: Number, default: null },
    size: { type: Number, default: null },
    responseHeaders: {
        type: ResponseHeaderSchema,
        required: true,
    }

})



export type NetworkInformationType = mongoose.InferSchemaType<typeof networkInformationSchema>;