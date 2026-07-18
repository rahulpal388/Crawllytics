export default function WelcomeEmailTXT({
  displayName,
  dashboardUrl,
  supportEmail,
  year,
  appName,
}: {
  displayName: string;
  dashboardUrl: string;
  supportEmail: string;
  year: number;
  appName: string;
}) {
  return `Welcome to ${appName}

Hello ${displayName},

Thank you for joining ${appName}! Your account has been successfully created and is ready to use.

With ${appName}, you can:

• Crawl entire websites
• Detect technical SEO issues
• Monitor crawl performance
• Generate detailed SEO reports

Open your dashboard:
${dashboardUrl}

Need help?

If you have any questions, simply reply to this email or contact us at:
${supportEmail}

You received this email because you created an account on ${appName}.

© ${year} ${appName}. All rights reserved.
`;
}
