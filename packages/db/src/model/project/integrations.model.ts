import mongoose from "mongoose";
import IntegrationsSchema from "../../schema/project/integrations.schema.js";
import { IntegrationSchemaType } from "../../types/projectType/integrations.Types.js";

const IntegrationsModel = mongoose.model<IntegrationSchemaType>("Integrations", IntegrationsSchema);

export default IntegrationsModel;
