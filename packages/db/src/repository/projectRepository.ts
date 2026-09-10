import mongoose from "mongoose";
import ProjectModel from "../model/project/project.model.js";
import { ProjectSchemaType } from "../types/projectType/project.Types.js";




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
    }
}