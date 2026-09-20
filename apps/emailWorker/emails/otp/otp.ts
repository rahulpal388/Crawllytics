import { EmailTemplate } from "@/types/emailTemplateTypes.js";
import { APP_NAME, EMAIL_URL } from "@/config/config.js";

export interface OTPEmailProps {
  username: string;
  appName: string;
  otp: string;
  expiresInMinutes: number;
  supportEmail: string;
}

export const OTPTemplate: EmailTemplate = {
  from: `${APP_NAME} <${EMAIL_URL.AUTH}>`,
  subject: "Crawllytics verification code",
};
