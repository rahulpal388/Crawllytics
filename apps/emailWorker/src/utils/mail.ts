import { CreateEmailOptions } from "resend";
import { resend } from "../index.js";
import { ReactElement } from "react";
import OTPEmail from "../../emails/otp/otpEmail.js";

export function mail() {
  return {
    send,
  };

  async function send(options: CreateEmailOptions) {
    return resend.emails.send(options);
  }
}

const Mail = mail();
export default Mail;
