import { OTPType } from "./otp.type.js";

export const OTP_EXPIRY: Record<OTPType, number> = {
  EMAIL_VERIFICATION: 2 * 60,
  PASSWORD_RESET: 2 * 60,
} as const;
