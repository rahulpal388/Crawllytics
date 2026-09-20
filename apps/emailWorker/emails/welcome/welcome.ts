import { EmailTemplate } from "@/types/emailTemplateTypes.js";
import { EMAIL_URL } from "@/config/config.js";

export interface WelcomeEmailProps {
  displayName: string;
  dashboardUrl: string;
  supportEmail: string;
}

export const WelcomeTemplate: EmailTemplate = {
  from: `SEO Analyzer <${EMAIL_URL.DEFAULT}>`,
  subject: "Welcome to SEO Analyzer",
};
