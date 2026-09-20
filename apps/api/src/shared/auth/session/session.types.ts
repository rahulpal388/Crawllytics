import { LoginActivitySchemaType } from "@repo/db/types/logActivitySchema.Types";

export type SessionDataType = {
  userId: string;
  email: string;
};

export type SessionInfoType = Omit<
  LoginActivitySchemaType,
  "userId" | "sessionId" | "createdAt" | "lastActiveAt" | "expiredAt"
>;
