import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { PROVIDERS, UserType, STATUS } from "../types/userType.js";
import { model } from "mongoose";



const userSchemaDefination: SchemaOf<UserType> = {
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    avatar: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, default: false },
    status: { type: String, enum: STATUS, required: true },
    provider: { type: String, enum: PROVIDERS, required: true },
    providerUserId: { type: String, required: true },
    credential: { type: Schema.Types.ObjectId, ref: "Credential", default: null },
    session: { type: Schema.Types.ObjectId, ref: "Session", default: null },
    seedUrls: [{ type: Schema.Types.ObjectId, ref: "SeedUrl" }]
}


const userSchema = new Schema<UserType>(userSchemaDefination);



export const userModel = model("User", userSchema);