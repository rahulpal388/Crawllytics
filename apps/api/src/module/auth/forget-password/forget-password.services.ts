
import { env } from "@/app/app.js";
import crypto from "crypto";
import { emailPublisher, hashStore } from "@/app/server.js";
import { userRepository } from "@repo/db/repository/userRepository";
import { AppError } from "@/shared/error/appError.js";
import hashService from "@/shared/security/hash/hash.service.js";
import { verifyForgetPasswordRequestType } from "@repo/contracts/apiContracts/auth/forget-password.request";
import { authIdentityRepository } from "@repo/db/repository/authIdentityRepository";
import mongoose from "mongoose";
import { ApiError } from "@/shared/error/apiError.js";


const PASSWORD_RESET_TOKEN_EXPIRATION = 15 * 60; // 15 minutes in seconds



type PasswordResetTokenDataType = {
    id: string;
    email: string;
    name: string;
}

class ForgetPasswordService {

    private getRedisKey(token: string) {
        return `forget-password:${token}`;
    }

    private getResetLink() {
        const token = crypto.randomBytes(32).toString("hex");
        const PASSWORD_RESET_URL = `${env.APP_URL}/reset-password`;
        return {
            token,
            url: `${PASSWORD_RESET_URL}?token=${token}`
        };
    }

    async sendResetPasswordEmail(email: string) {


        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw ApiError.userNotFound();
        }


        /*
            *   Generate a unique token and url
            *   The token will use to verify that link is valid and not expired
        */
        const { token, url } = this.getResetLink();
        const redisKey = this.getRedisKey(token);
        // store the token in redis with an expiration time of 15 minutes
        await hashStore.setWithExpire<PasswordResetTokenDataType>(redisKey, {
            email: user.email,
            name: user.name,
            id: user.id.toString()
        }, PASSWORD_RESET_TOKEN_EXPIRATION);

        // send the url via email to the user
        await emailPublisher.enqueue({
            eventId: crypto.randomUUID(),
            type: "password_reset",
            payload: {
                email,
                name: user.name,
                url,
                expireIn: PASSWORD_RESET_TOKEN_EXPIRATION,
            }
        })

        return {
            message: "reset password email sent successfully",
            key: redisKey,
        }



    }

    async verifyResetPasswordToken(data: verifyForgetPasswordRequestType) {
        const key = this.getRedisKey(data.token);

        console.log("key", key)
        const userData = await hashStore.get<PasswordResetTokenDataType>(key);

        if (!userData) {
            throw ApiError.linkExpired();
        }

        const hashPassword = await hashService.hash(data.newPassword)

        console.log("userData", userData)
        await authIdentityRepository.findOneAndUpdate(userData.id, "EMAIL", {
            userId: new mongoose.Types.ObjectId(userData.id),
            provider: "EMAIL",
            providerAccountId: userData.email,
            passwordHash: hashPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        await emailPublisher.enqueue({
            eventId: crypto.randomUUID(),
            type: "password_change_confirmation",
            payload: {
                email: userData.email,
                name: userData.name,
            }
        })


        return {
            message: "password reset successfully",
        }




    }


}

const forgetPasswordService = new ForgetPasswordService();
export default forgetPasswordService;