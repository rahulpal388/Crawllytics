import { userModel } from "../model/userModel.js";
import { UserType } from "../types/userType.js";
import { Types } from "mongoose";

export const userRepository = {
  addUser,
  updateSeedUrl,
  findByEmail,
};

// ############################ add data to user collection #########################

async function addUser(userInfo: UserType) {
  return await userModel.create(userInfo);
}

// ######################## get data from user collection #########################

async function findByEmail(email: string) {
  return await userModel.findOne({ email: email });
}

// ########################## update data from user collection #########################

async function updateSeedUrl(userId: string | Types.ObjectId, seedUrlId: string | Types.ObjectId) {
  return await userModel.findByIdAndUpdate(
    userId,
    { $push: { seedUrls: seedUrlId } },
    { new: true },
  );
}
