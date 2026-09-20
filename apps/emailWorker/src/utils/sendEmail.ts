import { EmailStreamMessage } from "@repo/redis/types/emailStreamMessageType";
import { sendOTPMail } from "../../emails/otp/sendOtpMail.js";
import { sendWelcomeMail } from "../../emails/welcome/sendWelcomeMail.js";
import { sendLoginAlertMail } from "../../emails/loginAlert/sendLoginAlertMail.js";
import { passwordResetMail } from "../../emails/passwordReset/passwordResetMail.js";
import { sendPasswordResetConfirmation } from "../../emails/password-reset-confirmation/sendPassword-reset-confirmation.js";

export async function sendEmail(msg: EmailStreamMessage) {
  switch (msg.type) {
    case "otp": {
      return sendOTPMail(msg);
    }
    case "welcome": {
      return sendWelcomeMail(msg);
    }
    case "login_alert": {
      console.log("sending login alert email");
      return sendLoginAlertMail(msg);
    }
    case "password_reset": {
      console.log("sending password reset email");
      return passwordResetMail(msg);
    }
    case "password_change_confirmation": {
      return sendPasswordResetConfirmation(msg);
    }
    default: {
      /*
       * _exhaustiveCheck : this will check if any new email type is added in the future and not handled here, it will throw a compile time error
       */
      return assertNever(msg);
    }
  }
}

function assertNever(_: never): never {
  throw new Error("Unsupported email type");
}
