import logActivityModel from "../model/UserDomainModels/logActivity.model.js";
import { LoginActivitySchemaType } from "../types/userTypes/logActivitySchema.Types.js";

export const loginActivityRepository = {
  createLoginActivity,
  findAllByUserId,
};

async function createLoginActivity(activity: LoginActivitySchemaType) {
  return await logActivityModel.create(activity);
}

async function findAllByUserId(userId: string) {
  return await logActivityModel.find({ userId: userId });
}
