import { createElement } from "react";
import { render } from "@react-email/render";
import { EmailStreamMessageType } from "@repo/redis/types/emailStreamMessageType";
import { PasswordResetConfirmationTemplate } from "./password-reset-confirmation.js";
import PasswordResetConfirmationEmail from "./password-reset-confirmation-email.js";
import Mail from "@/utils/mail.js";
import { APP_NAME } from "@/config/config.js";

export async function sendPasswordResetConfirmation(
  msg: EmailStreamMessageType<"password_change_confirmation">,
) {
  const emailPayload = {
    name: msg.payload.name,
    appName: APP_NAME,
  };

  const html = await render(createElement(PasswordResetConfirmationEmail, emailPayload));

  return Mail.send({
    from: PasswordResetConfirmationTemplate.from,
    to: msg.payload.email,
    subject: PasswordResetConfirmationTemplate.subject,
    html: html,
  });
}
