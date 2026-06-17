import { Schema } from "mongoose";


export type SeedUrlType = {
    status: boolean;
    urlCrawled: Schema.Types.ObjectId[];
    analyzedData: Schema.Types.ObjectId | null;
}