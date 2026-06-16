import { Schema } from "mongoose";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { UserType } from "../types/userType.js";



const userSchemaDefination: SchemaOf<UserType> = {
    seedUrls: [{ type: Schema.Types.ObjectId, ref: "SeedUrl" }]
}