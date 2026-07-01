import { model, Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { CredentialType } from "../types/userType.js";



const credentialsSchemaDefination: SchemaOf<CredentialType> = {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    passwordHash: { type: String, required: true },
    passwordChangedAt: { type: Date, required: true },
    failedAttempts: { type: Number, default: 0 },
    lockedUntil: { type: Date, default: null },
}


const credentialsSchema = new Schema<CredentialType>(credentialsSchemaDefination, { timestamps: { createdAt: true, updatedAt: false } });

export const credentialsModel = model("Credential", credentialsSchema);