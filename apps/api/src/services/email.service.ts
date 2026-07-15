import { DeviceInfo } from "@/types/deviceInfo.js";


function emailService() {
    return {
        sendOTPEmail,
        sendWelcomeEmail,
        sendLoginNotificationEmail
    }

    async function sendOTPEmail(email: string, name: string, otp: string) { }

    async function sendWelcomeEmail(email: string, name: string) { }
    async function sendLoginNotificationEmail(email: string, name: string, deviceInfo: DeviceInfo, location: string) { }

};




const EmailService = emailService();

export default EmailService;