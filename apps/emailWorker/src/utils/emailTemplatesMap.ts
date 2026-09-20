import { EmailTypes } from "@repo/redis/types/emailStreamMessageType";
import { OTPTemplate } from "../../emails/otp/otp.js";

export const EmailTemplateMap = {
  [EmailTypes.OTP]: OTPTemplate,
};
