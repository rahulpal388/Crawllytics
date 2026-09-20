import mongoose from "mongoose";
import ProjectModel from "../model/project/project.model.js";
import { ProjectSchemaType } from "../types/projectType/project.Types.js";
import { DomainInformationType } from "@repo/contracts/types/crawl/domain-leve-information/domainInformation.Types";
import { WebsiteInformationType } from "@repo/contracts/types/crawl/domain-leve-information/websiteInformation.Types";




export const projectRepository = {

    async createProject(projectData: ProjectSchemaType) {
        return ProjectModel.create(projectData);
    },


    async deleteProject(projectId: mongoose.Types.ObjectId) {
        return ProjectModel.findByIdAndDelete({ _id: projectId });
    },

    async getProjectById(projectId: mongoose.Types.ObjectId) {
        return ProjectModel.findById({ _id: projectId });
    },

    async getProjectByDomain(domain: string) {
        return ProjectModel.findOne({ domain });
    },

    async updateDomainAndWebsiteInfo(projectId: mongoose.Types.ObjectId, domainInfo: DomainInformationType | null, websiteInfo: WebsiteInformationType | null) {
        return ProjectModel.findByIdAndUpdate(
            { _id: projectId },
            { domainInfo, websiteInfo },
            { new: true }
        );

    }
}