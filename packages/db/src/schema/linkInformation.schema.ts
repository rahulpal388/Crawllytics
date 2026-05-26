import mongoose from "mongoose";
import { HTMLLinksType } from "@repo/config/types/urlInformationType/htmlLinksTypes";

export const linkInformationSchema = new mongoose.Schema<HTMLLinksType>({
    internalLinks: [{
        url: { type: String, default: "" },
        anchorText: { type: String, default: "" },
    }],
    externalLinks: [{
        url: { type: String, default: "" },
        anchorText: { type: String, default: "" },
        relAttributes: { type: String, default: "" },
    }]
}, {
    _id: false,
})

export type LinkInformationType = mongoose.InferSchemaType<typeof linkInformationSchema>;