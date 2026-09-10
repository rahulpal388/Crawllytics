import mongoose from "mongoose";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import { LimitTypeEnum, ProjectSettingSchemaType } from "../../types/projectType/projectSetting.Types.js";
import { ReportFormat } from "../../types/report.Types.js";



const projectSettingsSchemaDefinition: SchemaOf<ProjectSettingSchemaType> = {
    projectId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Project" },
    sendReport: { type: Boolean, required: true },
    reportType: { type: String, enum: Object.values(ReportFormat), required: true },
    /*
    * robotTxtUrls : The URLs of the robots.txt files for the project and user can add more urls
    */
    robotsTxtUrls: { type: String, default: null },
    /*
    * siteMapUrls : The URLs of the sitemap.xml files for the project and user can add more urls
    */
    siteMapUrls: [{ type: String, default: [] }],
    /*
    * userAgent : The user agent for the project and user can change it
    * If userAgent is not provided then default user agent will be used
    */
    userAgent: { type: String, default: null },
    crawlLimit: {
        type: {
            type: String,
            enum: Object.values(LimitTypeEnum),
            required: true
        },
        value: {
            type: Number,
            min: 1,
            required: true
        }
    },

}


const ProjectSettingsSchema = new mongoose.Schema<ProjectSettingSchemaType>(projectSettingsSchemaDefinition, { timestamps: true });

export default ProjectSettingsSchema;
