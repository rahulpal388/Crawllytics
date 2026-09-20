import { ProjectSchemaType } from "../../types/projectType/project.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";
import { domainInfoSchema } from "../DomainAndWebsiteInfoSchema/domain.schema.js";
import { websiteInfoSchema } from "../DomainAndWebsiteInfoSchema/websiteInfo.schema.js";




const projectSchemaDefination: SchemaOf<ProjectSchemaType> = {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    projectName: { type: String, required: true },
    domain: { type: String, required: true },
    domainInfo: { type: domainInfoSchema, default: null },
    websiteInfo: { type: websiteInfoSchema, default: null },
    lastCrawledAt: { type: Date, default: null },
    nextCrawlAt: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now }
}


const ProjectSchema = new mongoose.Schema<ProjectSchemaType>(projectSchemaDefination);

export default ProjectSchema;
