import { ProjectSchemaType } from "../../types/projectType/project.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";




const projectSchemaDefination: SchemaOf<ProjectSchemaType> = {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    projectName: { type: String, required: true },
    domain: { type: String, required: true },
    lastCrawledAt: { type: Date, default: null },
    nextCrawlAt: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now }
}


const ProjectSchema = new mongoose.Schema<ProjectSchemaType>(projectSchemaDefination);

export default ProjectSchema;
