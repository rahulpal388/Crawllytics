import mongoose from "mongoose";


export const mediaInformationSchema = new mongoose.Schema({
    images: [{
        src: { type: String, default: "" },
        altText: { type: String, default: "" },
        altTextLength: { type: Number, default: 0 },
        hasAltText: { type: Boolean, default: false },
        altEmpty: { type: Boolean, default: false },
        widthDeclare: { type: Boolean, default: false },
        heightDeclare: { type: Boolean, default: false },
        loadingAttribute: { type: String, default: "" },
    }],
    videos: [{
        src: { type: String, default: "" },
        hasVideo: { type: Boolean, default: false },
        videoType: { type: String, default: "" },
        hasTranscript: { type: Boolean, default: false },
        autoPlay: { type: Boolean, default: false },

    }]
})


export type MediaInformationType = mongoose.InferSchemaType<typeof mediaInformationSchema>;