import authIdentityModel from "../model/authIdentity.model.js";
import { AuthIdentitySchemaType, AuthProvidersType } from "../types/authIdentitySchema.Types.js";

export const authIdentityRepository = {
  addAuthIdentity,
  findByUserId,
  findOneAndUpdate,
};

async function addAuthIdentity(authIdentityInfo: AuthIdentitySchemaType) {
  return authIdentityModel.create(authIdentityInfo);
}

async function findByUserId(userId: string, provider: AuthProvidersType) {
  return authIdentityModel.findOne({ userId: userId, provider: provider });
}

async function findOneAndUpdate(
  userId: string,
  provider: AuthProvidersType,
  update: AuthIdentitySchemaType,
) {
  const { createdAt, ...updatedFields } = update;
  return authIdentityModel.findOneAndUpdate(
    { userId: userId, provider: provider },
    {
      $set: { ...updatedFields },
      $setOnInsert: { createdAt: createdAt },
    },
    { upsert: true, new: true },
  );
}
