import OTPEmail from "./otpEmail.js";
import { EmailTemplate } from "@/types/emailTemplateTypes.js";
import { APP_NAME, AUTH_EMAIL } from "@/config/config.js";

export interface OTPEmailProps {
  username: string;
  appName: string;
  otp: string;
  expiresInMinutes: number;
  supportEmail: string;
}

export const OTPTemplate: EmailTemplate = {
  from: `${APP_NAME} <${AUTH_EMAIL}>`,
  subject: "Crawllytics verification code",
};
