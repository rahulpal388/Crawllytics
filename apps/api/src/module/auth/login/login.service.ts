import { LoginEmailRequestType } from "@repo/contracts/apiContracts/auth/login-email.request";
import { AuthLoginResponse } from "@repo/contracts/apiContracts/apiResponse/auth-login.response";
import { userRepository } from "@repo/db/repository/userRepository";
import { AppError } from "../../../shared/error/appError.js";
import hashService from "@/shared/security/hash/hash.service.js";
import { authIdentityRepository } from "@repo/db/repository/authIdentityRepository";
import { emailPublisher, sessionService } from "@/app/server.js";
import { LoginActivitySchemaType } from "@repo/db/types/logActivitySchema.Types";
import { randomUUID } from "crypto"
import { formatLocation } from "@/lib/formatLocation.js";
import { SessionInfoType } from "@/shared/auth/session/session.types.js";
import { ApiError } from "@/shared/error/apiError.js";


export async function loginService(data: LoginEmailRequestType, sessionInfo: SessionInfoType): Promise<AuthLoginResponse> {


    const userInfo = await userRepository.findByEmail(data.email);


    if (!userInfo) {
        throw ApiError.userNotFound();
    }

    const user = await authIdentityRepository.findByUserId(userInfo._id.toString(), "EMAIL");

    if (!user) {
        throw ApiError.userNotFound();
    }

    const isPasswordValid = await hashService.verify(data.password, user.passwordHash!);

    if (!isPasswordValid) {
        throw ApiError.invalidCredentials("Invalid email or password");
    }

    /* 
    *   create a session for the user after successful login
    */
    const sessionId = await sessionService.create(
        {
            userId: userInfo._id.toString(),
            email: userInfo.email,
        },
        userInfo._id.toString(),
        sessionInfo
    )


    /* 
    *   Send email to user about login activity
    */

    await emailPublisher.enqueue({
        eventId: randomUUID(),
        type: "login_alert",
        payload: {
            email: userInfo.email,
            name: userInfo.name,
            deviceName: sessionInfo.userAgent,
            location: formatLocation(sessionInfo.location),
            ipAddress: sessionInfo.ipAddress,
        },
        createdAt: new Date(),
    })

    return {
        success: true,
        message: "Login successful",
        data: {
            sessionId,
            user: {
                id: userInfo._id.toString(),
                email: userInfo.email,
                name: userInfo.name,
                avatar: userInfo.avatar || null,
            }
        }
    }

}

