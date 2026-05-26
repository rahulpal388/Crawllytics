import mongoose from "mongoose";
import { networkInformationSchema } from "@repo/db/schema/networkInformation.schema";
import { linkInformationSchema } from "@repo/db/schema/linkInformation.schema";
import { mediaInformationSchema } from "@repo/db/schema/mediaInformation.schema";
import { contentInformationSchema } from "@repo/db/schema/contentInformation.schema";
import { headerInformationSchema } from "@repo/db/schema/headerInformation.schema";

import { EachUrlNetworkResultTypes } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { HTMLHeaderType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { HTMLMediaTypes } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import { HTMLContentsType } from "@repo/config/types/urlInformationType/htmlContentsTypes";
import { HTMLLinksType } from "@repo/config/types/urlInformationType/htmlLinksTypes";


export interface GatherPageInformationType {
    gatherInformationId: mongoose.Schema.Types.ObjectId;
    networkInformation: EachUrlNetworkResultTypes;
    headerInformation: HTMLHeaderType;
    contentInformation: HTMLContentsType;
    mediaInformation: HTMLMediaTypes;
    linkInformation: HTMLLinksType;
}

export const GatherPageInformationSchema = new mongoose.Schema<GatherPageInformationType>({
    gatherInformationId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "GatherInformation" },
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



export const GatherPageInformationModel = mongoose.model("GatherPageInformation", GatherPageInformationSchema);