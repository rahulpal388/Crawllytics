export const DOMAIN = "mail.crawllytics.dev";

export const APP_NAME = "Crawllytics";

export const EMAIL_URL = {
  DEFAULT: `no-reply@${DOMAIN}`,
  SUPPORT: `support@${DOMAIN}`,
  AUTH: `auth@${DOMAIN}`,
} as const;

export const DASHBOARD_URL = `https://${DOMAIN}/projects`;
