import { SchemaOf } from "../../types/schemaOfTypes.js";
import { DomainInformationType } from "@repo/contracts/types/crawl/domain-leve-information/domainInformation.Types";

import mongoose from "mongoose";



const domainSchemaDefinition: SchemaOf<DomainInformationType> = {
    registrar: { type: String, default: null },
    RegistryDomainID: { type: String, default: null },
    domainStatus: { type: String, default: null },
    registerOn: { type: Date, default: null },
    expiresOn: { type: Date, default: null },
    nameServers: { type: [String], default: [] },
}




export const domainInfoSchema = new mongoose.Schema<DomainInformationType>(domainSchemaDefinition, {
    _id: false,
    timestamps: false,
    versionKey: false,
});