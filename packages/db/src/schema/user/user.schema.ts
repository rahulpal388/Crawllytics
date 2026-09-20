import { SchemaOf } from "../../types/schemaOfTypes.js";
import { UserSchemaType } from "../../types/userSchema.Types.js";
import { Schema } from "mongoose";

const userSchemaDefination: SchemaOf<UserSchemaType> = {
  name: { type: String, required: true },
  avatar: { type: String, default: null },
  email: { type: String, required: true, unique: true },
  emailVerified: { type: Boolean, default: false },
};

const UserSchema = new Schema<UserSchemaType>(userSchemaDefination);

export default UserSchema;
