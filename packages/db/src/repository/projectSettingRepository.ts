import { ProjectSettingSchemaType } from "../types/projectType/projectSetting.Types.js";
import ProjectSettingsModel from "../model/project/projectSettings.model.js";
import mongoose from "mongoose";

export const projectSettingRepository = {
  async create(setting: ProjectSettingSchemaType) {
    return ProjectSettingsModel.create(setting);
  },

  async delete(projectId: mongoose.Types.ObjectId) {
    return ProjectSettingsModel.findOneAndDelete({ projectId });
  },

  async getByProjectId(projectId: mongoose.Types.ObjectId) {
    return ProjectSettingsModel.findOne({ projectId });
  },
};
