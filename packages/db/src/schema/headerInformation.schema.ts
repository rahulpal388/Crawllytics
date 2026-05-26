import mongoose from "mongoose";
import { HTMLHeaderType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";

export const headerInformationSchema = new mongoose.Schema<HTMLHeaderType>({
    title: [{
        text: { type: String, default: "" },
        lengthChar: { type: Number, default: 0 },
        lengthPixel: { type: Number, default: 0 },
    }],
    meta: {
        metaDescription: [
            {
                text: { type: String, default: "" },
                lengthChar: { type: Number, default: 0 },
                lengthPixel: { type: Number, default: 0 },
            }
        ],
        metaRobot: {
            robotValue: { type: String, default: "" },
            followValue: { type: String, default: "" },
            snippetControl: { type: String, default: "" },
            imageControl: { type: String, default: "" },
            videoControl: { type: String, default: "" },
        },
        canonical: [{
            canonicalUrl: { type: String, default: "" },
            isSelfReferencing: { type: Boolean, default: false },
            isCrossPage: { type: Boolean, default: false },
            isCrossDomain: { type: Boolean, default: false },
            isAbsoluteUrl: { type: Boolean, default: false },

        }],
        openGraph: {
            title: { type: String, default: "" },
            description: { type: String, default: "" },
            image: { type: String, default: "" },
            url: { type: String, default: "" },
            type: { type: String, default: "" },
        },
        metaViewport: {
            value: { type: String, default: "" },
            isMobileReady: { type: Boolean, default: false },
        }
    }
}, {
    _id: false,
})




