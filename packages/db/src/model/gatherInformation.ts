import mongoose from "mongoose";


export const gatherInformationSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    url: { type: String, required: true },
    pages: [{ type: mongoose.Types.ObjectId, ref: "GatherPageInformation" }],
})


export type GatherInformationType = mongoose.InferSchemaType<typeof gatherInformationSchema>;





export const GatherInformationModel = mongoose.model("GatherInformation", gatherInformationSchema);