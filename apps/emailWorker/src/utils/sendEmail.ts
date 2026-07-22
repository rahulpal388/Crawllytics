import { EmailStreamMessage } from "@repo/queue/types/emailStreamMessageType";
import { sendOTPMail } from "../../emails/otp/sendOtpMail.js";
import { sendWelcomeMail } from "../../emails/welcome/sendWelcomeMail.js";

export async function sendEmail(msg: EmailStreamMessage) {
  switch (msg.type) {
    case "otp": {
      return sendOTPMail(msg);
    };
    case "welcome": {
      return sendWelcomeMail(msg);
    }
  }
}
