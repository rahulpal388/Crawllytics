
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";
import { ProjectInfoSchemaType } from "../../types/projectType/projectInfo.types.js";
import { DomainInformationType } from "@repo/contracts/types/crawl/domain-leve-information/domainInformation.Types";
import { WebsiteInformationType } from "@repo/contracts/types/crawl/domain-leve-information/websiteInformation.Types";


const domainInfoSchemaDefination: SchemaOf<DomainInformationType> = {
    registrar: { type: String, default: null },
    registryDomainID: { type: String, default: null },
    domainStatus: { type: String, default: null },
    registerOn: { type: Date, default: null },
    expiresOn: { type: Date, default: null },
    nameServers: { type: [String], default: [] },
}

const websiteInfoSchemaDefination: SchemaOf<WebsiteInformationType> = {
    websiteName: { type: String, default: null },
    domain: { type: String, default: null },
    ipAddress: { type: String, default: null },
    webServer: { type: [String], default: [] },
    serverLocation: { type: String, default: null },
    favicons: { type: [String], default: [] },
    languages: { type: [String], default: [] },
}




const domainInfoSchema = new mongoose.Schema<DomainInformationType>(domainInfoSchemaDefination, {
    _id: false,
    versionKey: false,
    strict: false,
});

const websiteInfoSchema = new mongoose.Schema<WebsiteInformationType>(websiteInfoSchemaDefination, {
    _id: false,
    versionKey: false,
    strict: false,
});


const projectInfoSchemaDefination: SchemaOf<ProjectInfoSchemaType> = {
    projectId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Project" },
    domainInfo: { type: domainInfoSchema, default: null },
    websiteInfo: { type: websiteInfoSchema, default: null },
};



const projectInfoSchema = new mongoose.Schema<ProjectInfoSchemaType>(projectInfoSchemaDefination);
export default projectInfoSchema;