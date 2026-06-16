import { Schema } from "mongoose";


export type UserType = {
    seedUrls: Schema.Types.ObjectId[];
}