import OTPEmail from "./otpEmail.js";
import OTPEmailTXT from "./optEmail.txt.js";
import { EmailTemplate } from "@/types/emailTemplateTypes.js";
import { APP_NAME, AUTH_EMAIL } from "@/config/config.js";

export interface OTPEmailProps {
  appName: string;
  otp: string;
  expiresInMinutes: number;
  supportEmail: string;
}
export const OTPTemplate: EmailTemplate<OTPEmailProps> = {
  from: `${APP_NAME} <${AUTH_EMAIL}>`,
  subject: "Your OTP Code",
  react: OTPEmail,
  text: OTPEmailTXT,
};
