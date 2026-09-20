import logActivityModel from "../model/logActivity.model.js";
import { LoginActivitySchemaType } from "../types/logActivitySchema.Types.js";

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
