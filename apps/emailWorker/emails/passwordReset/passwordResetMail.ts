import { EmailStreamMessageType } from "@repo/redis/types/emailStreamMessageType";
import { PasswordResetTemplate } from "./passwordReset.js";
import Mail from "@/utils/mail.js";
import PasswordResetEmail from "./passwordResetEmail.js";
import { createElement } from "react";
import { render } from "@react-email/render";
import { APP_NAME } from "@/config/config.js";

export async function passwordResetMail(msg: EmailStreamMessageType<"password_reset">) {
  const emailPayload = {
    name: msg.payload.name,
    url: msg.payload.url,
    expireIn: msg.payload.expireIn / 60,
    appName: APP_NAME,
  };

  const html = await render(createElement(PasswordResetEmail, emailPayload));

  return Mail.send({
    from: PasswordResetTemplate.from,
    to: msg.payload.email,
    subject: PasswordResetTemplate.subject,
    html: html,
  });
}
