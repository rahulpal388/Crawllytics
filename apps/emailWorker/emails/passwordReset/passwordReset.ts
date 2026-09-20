import { EmailTemplate } from "@/types/emailTemplateTypes.js";
import { APP_NAME, EMAIL_URL } from "@/config/config.js";

export interface PasswordResetEmailProps {
  name: string;
  url: string;
  expireIn: number;
  appName: string;
}

export const PasswordResetTemplate: EmailTemplate = {
  from: `${APP_NAME} <${EMAIL_URL.AUTH}>`,
  subject: "Crawllytics password reset",
};
