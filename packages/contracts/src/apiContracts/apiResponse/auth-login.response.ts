import { ApiResponseType } from "./apiResponseTemplete.js";

export type AuthLoginResponse = ApiResponseType<{
  sessionId: string;
  user: {
    id: string;
    email: string;
    name: string;
    avatar: string | null;
  };
}>;
