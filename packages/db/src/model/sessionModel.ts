import { model, Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { SessionType } from "../types/userType.js";




const sessionSchemaDefination: SchemaOf<SessionType> = {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    sessionId: { type: String, required: true, unique: true },
    ipAddress: { type: String, required: true },
    userAgent: { type: String, required: true },
    deviceName: { type: String, required: true },
    lastActivityAt: { type: Date, required: true },
    revokedAt: { type: Date, default: null },
    expiresAt: { type: Date, required: true },
}


const sessionSchema = new Schema<SessionType>(sessionSchemaDefination, { timestamps: { createdAt: true, updatedAt: false } });

export const sessionModel = model("Session", sessionSchema);