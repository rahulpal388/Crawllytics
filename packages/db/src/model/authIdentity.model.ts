import { AuthIdentitySchemaType } from "../types/authIdentitySchema.Types.js";
import mongoose from "mongoose";

import AuthIdentitySchema from "../schema/authIdentity/authIdentity.schema.js";

const authIdentityModel = mongoose.model<AuthIdentitySchemaType>(
  "AuthIdentity",
  AuthIdentitySchema,
);

export default authIdentityModel;
