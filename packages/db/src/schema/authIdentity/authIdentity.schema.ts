import { AuthIdentitySchemaType, AuthProvidersEnum } from "../../types/authIdentitySchema.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";

const AuthIdentitySchemaDefinition: SchemaOf<AuthIdentitySchemaType> = {
  userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  provider: { type: String, enum: Object.values(AuthProvidersEnum), required: true },
  /*
   * For email authentication, this stores the user's email address.
   * For Google authentication, this stores Google's stable account identifier.
   */
  providerAccountId: { type: String, required: true },
  passwordHash: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
};

const AuthIdentitySchema = new mongoose.Schema<AuthIdentitySchemaType>(
  AuthIdentitySchemaDefinition,
);

export default AuthIdentitySchema;
