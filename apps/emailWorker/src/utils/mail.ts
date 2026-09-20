import { CreateEmailOptions } from "resend";
import { resend } from "../index.js";

export function mail() {
  return {
    send,
  };

  async function send(options: CreateEmailOptions) {
    const response = await resend.emails.send(options);
    if (response.error) {
      throw new Error(response.error.message);
    }

    return response;
  }
}

const Mail = mail();
export default Mail;
