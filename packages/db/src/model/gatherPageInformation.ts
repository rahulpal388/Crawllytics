import mongoose from "mongoose";
import { headerInformationSchema } from "../schema/headerInformation.schema";
import { networkInformationSchema } from "../schema/networkInformation.schema";
import { linkInformationSchema } from "../schema/linkInformation.schema";
import { mediaInformationSchema } from "../schema/mediaInformation.schema";
import { contentInformationSchema } from "../schema/contentInformation.schema";

export const GatherPageInformationSchema = new mongoose.Schema({
    gatherInformationId: { type: mongoose.Types.ObjectId, required: true, ref: "GatherInformation" },
    networkInformation: {
        type: networkInformationSchema,
        required: true,
    },
    headerInformation: {
        type: headerInformationSchema,
        required: true,
    },
    contentInformation: {
        type: contentInformationSchema,
        required: true,
    },
    mediaInformation: {
        type: mediaInformationSchema,
        required: true,
    },
    linkInformation: {
        type: linkInformationSchema,
        required: true,
    }
})

export type GatherPageInformationType = mongoose.InferSchemaType<typeof GatherPageInformationSchema>;


export const GatherPageInformationModel = mongoose.model("GatherPageInformation", GatherPageInformationSchema);