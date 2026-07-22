import { EmailType } from "@repo/queue/types/emailStreamMessageType";
import { OTPTemplate } from "../../emails/otp/otp.js";

export const EmailTemplateMap = {
  [EmailType.OTP]: OTPTemplate,
};
