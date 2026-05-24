import mongoose from "mongoose";
export const OpenGraphSchema = new mongoose.Schema({
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    url: { type: String, default: "" },
    type: { type: String, default: "" },
})

export const MetaViewportSchema = new mongoose.Schema({
    value: { type: String, default: "" },
    isMobileReady: { type: Boolean, default: false },
})

export const CanonicalSchema = new mongoose.Schema({
    canonicalUrl: { type: String, default: "" },
    isSelfReferencing: { type: Boolean, default: false },
    isCrossPage: { type: Boolean, default: false },
    isCrossDomain: { type: Boolean, default: false },
    isAbsoluteUrl: { type: Boolean, default: false },
})
export const MetaDescriptionSchema = new mongoose.Schema({
    text: { type: String, default: "" },
    lengthChar: { type: Number, default: 0 },
    lengthPixel: { type: Number, default: 0 },

})
export const MetaRobotSchema = new mongoose.Schema({
    robotValue: { type: String, default: "" },
    followValue: { type: String, default: "" },
    snippetControl: { type: String, default: "" },
    imageControl: { type: String, default: "" },
    videoControl: { type: String, default: "" },
})


export type OpenGraphType = mongoose.InferSchemaType<typeof OpenGraphSchema>;
export type MetaViewportType = mongoose.InferSchemaType<typeof MetaViewportSchema>;
export type CanonicalType = mongoose.InferSchemaType<typeof CanonicalSchema>;
export type MetaDescriptionType = mongoose.InferSchemaType<typeof MetaDescriptionSchema>;
export type MetaRobotType = mongoose.InferSchemaType<typeof MetaRobotSchema>;

export const metaInformationSchema = new mongoose.Schema({
    metaDescription: [
        {
            type: MetaDescriptionSchema,
            required: true,
        }
    ],
    metaRobot: {
        type: MetaRobotSchema,
        required: true,
    },
    canonical: [{
        type: CanonicalSchema,
        required: true,

    }],
    openGraph: {
        type: OpenGraphSchema,
        required: true,
    },
    metaViewport: {
        type: MetaViewportSchema,
        required: true,
    }
})

export const headerInformationSchema = new mongoose.Schema({
    title: [{
        text: { type: String, default: "" },
        lengthChar: { type: Number, default: 0 },
        lengthPixel: { type: Number, default: 0 },
    }],
    meta: {
        type: metaInformationSchema,
        required: true,
    }
})



export type HeaderInformationType = mongoose.InferSchemaType<typeof headerInformationSchema>;

