import { Schema } from "mongoose";

export const STATUS = ["active", "suspended"] as const;

export const PROVIDERS = ["password", "google"] as const;

export type StatusType = (typeof STATUS)[number];
export type ProviderType = (typeof PROVIDERS)[number];

export type UserType = {
  name: string;
  avatar: string | null;
  email: string;
  emailVerified: boolean;
  status: StatusType;
  provider: ProviderType;
  providerUserId: string | null;
  providerToken: string | null;
  hashPassword: string | null;
  seedUrls: Schema.Types.ObjectId[];
};
