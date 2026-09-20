import mongoose from "mongoose";

export type LocationType = {
    country: string | null;
    region: string | null;
    city: string | null;
} | null

export type LoginActivitySchemaType = {
    userId: mongoose.Types.ObjectId;
    sessionId: string;
    userAgent: string | null;
    ipAddress: string | null;
    location: LocationType;
    createdAt: Date;
    lastActiveAt: Date;
    expiredAt: Date;
}
