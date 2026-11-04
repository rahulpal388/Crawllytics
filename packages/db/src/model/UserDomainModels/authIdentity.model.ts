import mongoose from "mongoose";
import { AuthIdentitySchemaType } from "../../types/userTypes/authIdentitySchema.Types.js";
import AuthIdentitySchema from "../../schema/userDomain/authIdentity/authIdentity.schema.js";

const authIdentityModel = mongoose.model<AuthIdentitySchemaType>(
  "AuthIdentity",
  AuthIdentitySchema,
);

export default authIdentityModel;
