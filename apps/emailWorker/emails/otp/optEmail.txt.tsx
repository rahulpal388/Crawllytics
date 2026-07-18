import { OTPEmailProps } from "./otp.js";

export default function OTPEmailTXT({
  appName,
  otp,
  expiresInMinutes,
  supportEmail,
}: OTPEmailProps) {
  return `Verify your email

Hello,

Use the verification code below to continue signing in

Verification Code

${otp}

This code expires in ${expiresInMinutes}   minutes.

If you didn't request this code, you can safely ignore this email.

Need help?

${supportEmail}

© ${new Date().getFullYear()} ${appName}`;
}
