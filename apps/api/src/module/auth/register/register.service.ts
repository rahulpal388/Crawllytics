import { RegisterEmailRequestType } from "@repo/contracts/apiContracts/auth/register-email.request";
import { AppError } from "../../../shared/error/appError.js";
import { otpService, sessionService } from "@/app/server.js";
import hashService from "@/shared/security/hash/hash.service.js";
import { emailPublisher } from "@/app/server.js";
import { userRepository } from "@repo/db/repository/userRepository";
import { AuthLoginResponse } from "@repo/contracts/apiContracts/apiResponse/auth-login.response";
import { OTP_EXPIRY } from "@/shared/auth/otp/otp.constants.js";
import { randomUUID } from "crypto";
import mongoose from "mongoose";
import { authIdentityRepository } from "@repo/db/repository/authIdentityRepository";

import { SessionInfoType } from "@/shared/auth/session/session.types.js";
import { ApiError } from "@/shared/error/apiError.js";

export const registerService = {
  registerUser,
  verifyUserOtp,
};

/*
 * Initiate user registration:
 * 1. Check whether a user with the given email already exists.
 * 2. If the user does not exist, generate an email verification OTP.
 * 3. Store the OTP temporarily for verification.
 */

async function registerUser(data: RegisterEmailRequestType) {
  const user = await userRepository.findByEmail(data.email);

  if (user) {
    throw ApiError.userAlreadyExists();
  }

  const hashPassword = await hashService.hash(data.password);

  /*
   *   Generate an OTP for email verification
   *   Verification ID to tackle the OTP verification process
   *   user info and OTP will be stored temprory in redis
   */
  const { verificationID, otp } = await otpService.create({
    type: "EMAIL_VERIFICATION",
    email: data.email,
    password: hashPassword,
    name: data.name,
  });

  /*
   *   Send the OTP to the user's email for verification
   */

  await emailPublisher.enqueue({
    eventId: randomUUID(),
    type: "otp",
    payload: {
      username: data.name,
      email: data.email,
      otp: otp,
      expireIn: OTP_EXPIRY["EMAIL_VERIFICATION"],
    },
    createdAt: new Date(),
  });

  return {
    success: true,
    message: "User registration initiated. Please check your email for the OTP.",
    verificationID,
  };
}

/*
 * Verify the OTP provided by the user:
 * 1. Retrieve the stored OTP and associated data using the verification ID.
 * 2. Compare the provided OTP with the stored OTP.
 * 3. If they match, create a new user in the database.
 * 4. Return a success response.
 */

async function verifyUserOtp(
  verificationId: string,
  userOtp: string,
  sessionInfo: SessionInfoType,
): Promise<AuthLoginResponse> {
  /*
   *   Verify the OTP provided by the user with the stored OTP in redis
   *   If the OTP is valid, retrieve the user data
   *   If the OTP is invalid or expired, throw an next error
   */
  const data = await otpService.verify("EMAIL_VERIFICATION", verificationId, userOtp);
  console.log(data);
  const mongoSession = await mongoose.startSession();
  try {
    /*
     *   Create a new user
     *   add authIdentity
     *   Create a login activity
     */
    const newUser = await mongoSession.withTransaction(async () => {
      // add the user
      const user = await userRepository.addUser({
        name: data.name,
        email: data.email,
        emailVerified: true,
        avatar: null,
      });

      await authIdentityRepository.addAuthIdentity({
        userId: user._id,
        provider: "EMAIL",
        providerAccountId: user.email,
        passwordHash: data.password,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return user;
    });

    console.log("newUser : ", newUser);
    // create a session for the user after successful OTP verification
    const sessionId = await sessionService.create(
      {
        userId: newUser._id.toString(),
        email: newUser.email,
      },
      newUser._id.toString(),
      sessionInfo,
    );

    // send welcome email to user
    await emailPublisher.enqueue({
      eventId: randomUUID(),
      type: "welcome",
      payload: {
        email: newUser.email,
        name: newUser.name,
      },
      createdAt: new Date(),
    });

    return {
      success: true,
      message: "User verified successfully",
      data: {
        sessionId,
        user: {
          id: newUser._id.toString(),
          email: newUser.email,
          name: newUser.name,
          avatar: newUser.avatar || null,
        },
      },
    };
  } catch (error) {
    console.log(error);
    throw ApiError.internal("Failed to verify user OTP");
  } finally {
    await mongoSession.endSession();
  }
}
