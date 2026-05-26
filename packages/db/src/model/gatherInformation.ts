import mongoose from "mongoose";


export type GatherInformationType = {
    userId: mongoose.Schema.Types.ObjectId,
    url: string,
    pages: mongoose.Schema.Types.ObjectId[],
}

export const gatherInformationSchema = new mongoose.Schema<GatherInformationType>({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    url: { type: String, required: true },
    pages: [{ type: mongoose.Schema.Types.ObjectId, ref: "GatherPageInformation" }],
})







export const GatherInformationModel = mongoose.model("GatherInformation", gatherInformationSchema);