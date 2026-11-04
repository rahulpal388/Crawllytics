import mongoose from "mongoose";

export const AuthProvidersEnum = {
  EMAIL: "EMAIL",
  GOOGLE: "GOOGLE",
} as const;

export type AuthProvidersType = (typeof AuthProvidersEnum)[keyof typeof AuthProvidersEnum];

export type AuthIdentitySchemaType = {
  userId: mongoose.Types.ObjectId;
  provider: AuthProvidersType;
  providerAccountId: string;
  passwordHash: string | null;
  createdAt: Date;
  updatedAt: Date;
};
