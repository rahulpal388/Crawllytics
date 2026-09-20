import { APP_NAME, EMAIL_URL } from "@/config/config.js";
import { EmailTemplate } from "@/types/emailTemplateTypes.js";

export interface LoginAlertEmailProps {
  name: string;
  deviceName: string | null;
  location: string | null;
  ipAddress: string | null;
  supportEmail: string;
}

export const LoginAlertTemplate: EmailTemplate = {
  from: `${APP_NAME} <${EMAIL_URL.DEFAULT}>`,
  subject: "Crawllytics login alert",
};
