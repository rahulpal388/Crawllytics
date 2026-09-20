import mongoose from "mongoose";
import ProjectSettingsSchema from "../../schema/project/projectSettings.schema.js";
import { ProjectSettingSchemaType } from "../../types/projectType/projectSetting.Types.js";

const ProjectSettingsModel = mongoose.model<ProjectSettingSchemaType>(
  "ProjectSettings",
  ProjectSettingsSchema,
);

export default ProjectSettingsModel;
