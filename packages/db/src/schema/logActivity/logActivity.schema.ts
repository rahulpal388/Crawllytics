import { LoginActivitySchemaType } from "../../types/logActivitySchema.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";
import LocationSchema from "./location.schema.js";

const LoginActivitySchemaDefinition: SchemaOf<LoginActivitySchemaType> = {
  userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  sessionId: { type: String, required: true },
  userAgent: { type: String, default: null },
  ipAddress: { type: String, default: null },
  location: { type: LocationSchema, default: null },
  createdAt: { type: Date, default: Date.now },
  lastActiveAt: { type: Date, default: Date.now },
  expiredAt: { type: Date, required: true },
};

const LoginActivitySchema = new mongoose.Schema<LoginActivitySchemaType>(
  LoginActivitySchemaDefinition,
);

export default LoginActivitySchema;
