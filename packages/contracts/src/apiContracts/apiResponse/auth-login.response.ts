import { ApiResponseType } from "./apiResponseTemplete.js";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  avatar: string | null;
};

export type AuthLoginResponse = ApiResponseType<{
  sessionId: string;
  user: AuthUser;
}>;
