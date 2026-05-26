import { GatherInformationType } from "@repo/db/model/gatherInformation";
import { GatherPageInformationType } from "@repo/db/model/gatherPageInformation";
import { GatherInformationModel } from "@repo/db/model/gatherInformation";
import "@repo/db/model/gatherPageInformation";
import mongoose from "mongoose";


export type GetGatherInformationResponseType = {
    url: string;
    pages: Omit<GatherPageInformationType, "gatherInformationId">[]
}


export async function getGatherInformation(gatherInformationId: string): Promise<GetGatherInformationResponseType | null> {
    const _id = new mongoose.Types.ObjectId(gatherInformationId);
    console.log("Fetching gather information for ID:", _id);

    try {
        const information = await GatherInformationModel.findOne(
            { _id }
        ).select("-__v -_id -userId").populate({
            path: "pages",
            select: "-__v -_id -gatherInformationId"
        }).lean();
        if (!information) {
            return null;
        }


        return information;
    } catch (error) {
        console.error("Error fetching gather information:", error);
        return null;
    }



}