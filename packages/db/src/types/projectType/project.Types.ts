import mongoose from "mongoose";



export type ProjectSchemaType = {
    userId: mongoose.Types.ObjectId;
    projectName: string;
    domain: string;
    lastCrawledAt: Date | null;
    nextCrawlAt: Date | null;
    createdAt: Date;
}
