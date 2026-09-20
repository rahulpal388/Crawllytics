import { APP_NAME, EMAIL_URL } from "@/config/config.js";
import { render } from "@react-email/render";
import { EmailStreamMessageType } from "@repo/redis/types/emailStreamMessageType";
import { createElement } from "react";
import OTPEmail from "./otpEmail.js";
import Mail from "@/utils/mail.js";
import { OTPTemplate } from "./otp.js";

export async function sendOTPMail(msg: EmailStreamMessageType<"otp">) {
  const emailPayload = {
    username: msg.payload.username,
    appName: APP_NAME,
    otp: msg.payload.otp,
    expiresInMinutes: msg.payload.expireIn / 60,
    supportEmail: EMAIL_URL.SUPPORT,
  };
  const html = await render(createElement(OTPEmail, emailPayload));

  return Mail.send({
    from: OTPTemplate.from,
    to: msg.payload.email,
    subject: OTPTemplate.subject,
    html: html,
  });
}
