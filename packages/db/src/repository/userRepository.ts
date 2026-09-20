import { Types } from "mongoose";
import UserModel from "../model/user.model.js";
import { UserSchemaType } from "../types/userSchema.Types.js";

export const userRepository = {
  addUser,
  findByEmail,
};

/*
 * Add a new user to the database
 */

async function addUser(userInfo: UserSchemaType) {
  return await UserModel.create(userInfo);
}

/*
 * Find a user by email
 */

async function findByEmail(email: string) {
  return await UserModel.findOne({ email: email });
}
