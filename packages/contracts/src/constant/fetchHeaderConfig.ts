export const DEFAULT_USER_AGENT =
  "CrawllyticsBot/1.0 (+https://crawllytics.com/bot)";


export const headerConfig = {
  "accept-encoding": "gzip, br, deflate",

  "user-agent": DEFAULT_USER_AGENT,

  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
} as const;