import { Schema } from "mongoose";
import { SchemaOf } from "../../../types/schemaOfTypes.js";
import { UserSchemaType } from "../../../types/userTypes/userSchema.Types.js";
import { UserStatus } from "../../../types/userTypes/userSchema.Types.js";

const userSchemaDefination: SchemaOf<UserSchemaType> = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, default: null },
  emailVerified: { type: Boolean, default: false },
  status: { type: String, enum: Object.values(UserStatus), default: UserStatus.ACTIVE },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
};

const UserSchema = new Schema<UserSchemaType>(userSchemaDefination);

export default UserSchema;
