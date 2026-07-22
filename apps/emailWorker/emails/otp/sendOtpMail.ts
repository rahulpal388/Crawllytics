import { APP_NAME, SUPPORT_EMAIL } from "@/config/config.js";
import { render } from "@react-email/render";
import { EmailStreamMessageType, EmailType } from "@repo/queue/types/emailStreamMessageType";
import { createElement } from "react";
import OTPEmail from "./otpEmail.js";
import Mail from "@/utils/mail.js";
import { OTPTemplate } from "./otp.js";



export async function sendOTPMail(msg: EmailStreamMessageType<EmailType.OTP>) {
    const emailPayload = {
        username: msg.payload.username,
        appName: APP_NAME,
        otp: msg.payload.otp,
        expiresInMinutes: msg.payload.expireIn,
        supportEmail: SUPPORT_EMAIL,
    };
    const html = await render(createElement(OTPEmail, emailPayload));

    return Mail.send({
        from: OTPTemplate.from,
        to: msg.payload.email,
        subject: OTPTemplate.subject,
        html: html,
    });

}