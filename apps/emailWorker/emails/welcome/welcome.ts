import { EmailTemplate } from "@/types/emailTemplateTypes.js";
import { ACCOUNT_EMAIL } from "@/config/config.js";


export interface WelcomeEmailProps {
  displayName: string;
  dashboardUrl: string;
  supportEmail: string;
}

export const WelcomeTemplate: EmailTemplate = {
  from: `SEO Analyzer <${ACCOUNT_EMAIL}>`,
  subject: "Welcome to SEO Analyzer",
};
