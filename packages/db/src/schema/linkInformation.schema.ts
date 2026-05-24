import mongoose from "mongoose";


export const linkInformationSchema = new mongoose.Schema({
    internalLinks: [{
        url: { type: String, default: "" },
        anchorText: { type: String, default: "" },
    }],
    externalLinks: [{
        url: { type: String, default: "" },
        anchorText: { type: String, default: "" },
        relAttributes: { type: String, default: "" },
    }]
})

export type LinkInformationType = mongoose.InferSchemaType<typeof linkInformationSchema>;