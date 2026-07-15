import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { PROVIDERS, UserType, STATUS } from "../types/userType.js";
import { model } from "mongoose";



const userSchemaDefination: SchemaOf<UserType> = {
    name: { type: String, required: true, unique: true },
    avatar: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, default: false },
    status: { type: String, enum: STATUS, required: true },
    provider: { type: String, enum: PROVIDERS, required: true },
    providerUserId: { type: String, default: null },
    providerToken: { type: String, default: null },
    hashPassword: { type: String, default: null },

    seedUrls: [{ type: Schema.Types.ObjectId, ref: "SeedUrl" }]
}


const userSchema = new Schema<UserType>(userSchemaDefination);



export const userModel = model("User", userSchema);