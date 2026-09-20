import { APP_NAME, EMAIL_URL } from "@/config/config.js";

export type PasswordResetConfirmationEmailProps = {
  name: string;
  appName: string;
};

export const PasswordResetConfirmationTemplate = {
  from: `${APP_NAME} <${EMAIL_URL.DEFAULT}>`,
  subject: "Crawllytics password reset confirmation",
};
