import {
  IntegrationProvider,
  IntegrationSchemaType,
  IntegrationStatus,
} from "../../types/projectType/integrations.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";

import { IntegrationCredentialsSchemaType } from "../../types/projectType/integrations.Types.js";

const credentialsSchemaDefination: SchemaOf<IntegrationCredentialsSchemaType> = {
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  expiresAt: { type: Date, required: true },
};

const CredentialsSchema = new mongoose.Schema<IntegrationCredentialsSchemaType>(
  credentialsSchemaDefination,
  {
    _id: false,
    versionKey: false,
    strict: true,
  },
);


// #########################################
// Integration Schema
// #########################################


const integrationSchemaDefination: SchemaOf<IntegrationSchemaType> = {
  projectId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  provider: { type: String, enum: Object.values(IntegrationProvider), required: true },
  status: { type: String, enum: Object.values(IntegrationStatus), required: true },
  credentials: { type: CredentialsSchema, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
};

const IntegrationSchema = new mongoose.Schema<IntegrationSchemaType>(integrationSchemaDefination);

export default IntegrationSchema;
