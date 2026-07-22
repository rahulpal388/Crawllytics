import { DASHBOARD_URL, SUPPORT_EMAIL } from "@/config/config.js";
import { render } from "@react-email/render";
import { EmailStreamMessageType, EmailType } from "@repo/queue/types/emailStreamMessageType";
import { createElement } from "react";
import WelcomeEmail from "./welcomeEmail.js";
import Mail from "@/utils/mail.js";
import { WelcomeTemplate } from "./welcome.js";


export async function sendWelcomeMail(msg: EmailStreamMessageType<EmailType.WELCOME>) {

    const emailPayload = {
        displayName: msg.payload.name,
        dashboardUrl: DASHBOARD_URL,
        supportEmail: SUPPORT_EMAIL,
    };

    const html = await render(createElement(WelcomeEmail, emailPayload));

    return Mail.send({
        from: WelcomeTemplate.from,
        to: msg.payload.email,
        subject: WelcomeTemplate.subject,
        html: html,
    });

}