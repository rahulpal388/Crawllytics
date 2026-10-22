import { useMutation } from "@tanstack/react-query";
import { registerUser, verifyRegistrationOTP } from "../api/signup.api";

type ErrorPayload = {
  message?: string;
  errorCode?: string;
  error?: {
    code?: string;
    message?: string;
    data?: { fields?: Record<string, string> };
  };
  data?: { fields?: Record<string, string> };
};

type ResponseError = {
  response?: {
    status?: number;
    data?: ErrorPayload;
  };
};

function isResponseError(error: unknown): error is ResponseError {
  return typeof error === "object" && error !== null && "response" in error;
}

export function getAuthErrorMessage(error: unknown): string {
  if (!isResponseError(error)) {
    return "Something went wrong. Please try again.";
  }

  const status = error.response?.status;
  const payload = error.response?.data;
  const apiError = payload?.error;
  const errorCode = payload?.errorCode ?? apiError?.code;

  if (errorCode === "USER_ALREADY_EXISTS" || status === 409) {
    return "An account with this email already exists.";
  }
  if (errorCode === "EXPIRED_LINK" || status === 410) {
    return "This verification code has expired. Request a new code and try again.";
  }
  if (status === 429) {
    return "Too many attempts. Please wait and try again.";
  }
  if (status && status >= 500) {
    return "Our server is having trouble. Please try again later.";
  }

  return apiError?.message ?? payload?.message ?? "Unable to complete your request.";
}

export function getFieldErrors(error: unknown): Record<string, string> {
  if (!isResponseError(error)) return {};
  const payload = error.response?.data;
  return payload?.data?.fields ?? payload?.error?.data?.fields ?? {};
}

export function useSignup() {
  const registration = useMutation({ mutationFn: registerUser });
  const verification = useMutation({ mutationFn: verifyRegistrationOTP });

  return { registration, verification };
}

// The API currently has no resend endpoint. This placeholder only controls the
// UI flow and must be replaced with a real resend mutation before production use.
export function useResendSignupOTP() {
  return useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 350));
      return { success: true };
    },
  });
}
