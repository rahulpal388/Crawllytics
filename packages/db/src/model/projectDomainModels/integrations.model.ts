import mongoose from "mongoose";
import IntegrationsSchema from "../../schema/projectDomain/integrations.schema.js";
import { IntegrationSchemaType } from "../../types/projectType/integrations.Types.js";

const IntegrationsModel = mongoose.model<IntegrationSchemaType>(
  "ProjectIntegrations",
  IntegrationsSchema,
);

export default IntegrationsModel;
