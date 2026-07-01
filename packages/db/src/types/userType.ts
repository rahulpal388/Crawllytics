import { Schema } from "mongoose";

export const STATUS = ["active", "suspended"] as const;


export const PROVIDERS = [
    "password",
    "google",
] as const;

export type StatusType = typeof STATUS[number];
export type ProviderType = typeof PROVIDERS[number];

export type UserType = {
    username: string;
    displayName: string;
    avatar: string | null;
    email: string;
    emailVerified: boolean;
    status: StatusType;
    provider: ProviderType;
    providerUserId: string;
    seedUrls: Schema.Types.ObjectId[];
    credential: Schema.Types.ObjectId | null;
    session: Schema.Types.ObjectId | null;
}


export type CredentialType = {
    userId: Schema.Types.ObjectId,
    passwordHash: string;
    passwordChangedAt: Date;
    failedAttempts: number;
    lockedUntil: Date | null;
}


export type SessionType = {
    userId: Schema.Types.ObjectId,
    sessionId: string;
    ipAddress: string;
    userAgent: string;
    deviceName: string;
    lastActivityAt: Date;
    expiresAt: Date;
    revokedAt: Date | null;
}