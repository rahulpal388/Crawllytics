export enum UserStatus {
  ACTIVE = "active",
  SUSPENDED = "suspended",
  DELETED = "deleted",
}

export type UserStatusType = (typeof UserStatus)[keyof typeof UserStatus];

export interface UserSchemaType {
  name: string;
  email: string;
  avatar: string | null;
  emailVerified: boolean;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}
