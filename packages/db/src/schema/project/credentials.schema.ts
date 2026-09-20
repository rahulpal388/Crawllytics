import { IntegrationCredentialsSchemaType } from "../../types/projectType/integrations.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";

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

export default CredentialsSchema;
