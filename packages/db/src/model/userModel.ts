import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { UserType } from "../types/userType.js";
import { model } from "mongoose";



const userSchemaDefination: SchemaOf<UserType> = {
    seedUrls: [{ type: Schema.Types.ObjectId, ref: "SeedUrl" }]
}


const userSchema = new Schema<UserType>(userSchemaDefination);



export const userModel = model("User", userSchema);