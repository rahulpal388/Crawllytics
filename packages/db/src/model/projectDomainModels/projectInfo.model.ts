import mongoose from "mongoose";
import ProjectInfoSchema from "../../schema/projectDomain/projectInfo.schema.js";

const projectInfoModel = mongoose.model("ProjectInfo", ProjectInfoSchema);

export default projectInfoModel;
