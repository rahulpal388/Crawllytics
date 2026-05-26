import mongoose from "mongoose";
import { HTMLContentsType } from "@repo/config/types/urlInformationType/htmlContentsTypes";


export const contentInformationSchema = new mongoose.Schema<HTMLContentsType>({
    h1: {
        count: { type: Number, default: 0 },
        texts: [{ type: String, default: "" }],
    },
    h2: {
        count: { type: Number, default: 0 },
        texts: [{ type: String, default: "" }],
    },
    h3H6: {
        count: { type: Number, default: 0 },
        texts: [{ type: String, default: "" }],
    },
    words: {
        count: { type: Number, default: 0 },
    }
}, {
    _id: false,
})


