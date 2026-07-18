import { EmailStreamMessage } from "@repo/queue/types/emailStreamMessageType";
import { EmailTemplateMap } from "./emailTemplates.js";
import Mail from "@/utils/mail.js";
import { createElement } from "react";
import { APP_NAME, SUPPORT_EMAIL } from "@/config/config.js";

import { render } from "@react-email/render";
import OTPEmail from "../../emails/otp/otpEmail.js";

export async function sendEmail(msg: EmailStreamMessage) {
  switch (msg.type) {
    case "otp": {
      const otpTemp = EmailTemplateMap[msg.type];
      const OTPComponent = otpTemp.react;
      const emailPayload = {
        appName: APP_NAME,
        otp: msg.payload.otp,
        expiresInMinutes: msg.payload.expireIn,
        supportEmail: SUPPORT_EMAIL,
      };
      const html = await render(createElement(OTPComponent, emailPayload));

      return Mail.send({
        from: otpTemp.from,
        to: msg.payload.email,
        subject: otpTemp.subject,
        // react: OTPEmail({
        //     appName: 'Acme',
        //     otp: '123456',
        //     expiresInMinutes: 10,
        //     supportEmail: 'support@acme.com',
        // }),
        html: html,
      });
    }
  }
}
