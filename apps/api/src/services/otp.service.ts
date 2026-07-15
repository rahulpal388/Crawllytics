import { randomInt } from "node:crypto"
import argon2 from "argon2"


function otpService() {

    return {
        generate,
        verify,
        hashOTP
    }


    function generate(length = 6) {
        const min = 10 ** (length - 1);
        const max = 10 ** length;
        return randomInt(min, max).toString();
    };

    async function hashOTP(otp: string) {
        return argon2.hash(otp);
    }

    async function verify(hashOtp: string, otp: string) {
        return argon2.verify(hashOtp, otp);
    }

};



const OTPService = otpService();
export default OTPService;