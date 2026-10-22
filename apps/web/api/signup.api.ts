import type {
  RegisterEmailRequestType,
  VerifyRegistrationOTPRequestType,
} from "@repo/contracts/apiContracts/auth/register-email.request";
import { apiClient } from "./apiClient";

export type RegisterResponse = {
  success: boolean;
  message: string;
  verificationID: string;
};

export async function registerUser(
  payload: RegisterEmailRequestType,
): Promise<RegisterResponse> {
  const { data } = await apiClient.post<RegisterResponse>("/auth/register", payload);
  return data;
}

export async function verifyRegistrationOTP(
  payload: VerifyRegistrationOTPRequestType,
) {
  const { data } = await apiClient.post("/auth/register/verify-otp", payload);
  return data;
}
