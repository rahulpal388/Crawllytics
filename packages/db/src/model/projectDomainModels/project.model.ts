import ProjectSchema from "../../schema/projectDomain/project.schema.js";
import { ProjectSchemaType } from "../../types/projectType/project.Types.js";
import mongoose from "mongoose";

const ProjectModel = mongoose.model<ProjectSchemaType>("Project", ProjectSchema);

export default ProjectModel;
