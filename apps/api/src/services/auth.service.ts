import { AppError } from "@/middlewares/errors/appError.js";
import { SignupType, VerifySignupType } from "@/validation/signup.validation.js";
import { userRepository } from "@repo/db/repository/userRepository";
import PasswordService from "./password.service.js";
import GoogleService from "./google.service.js";
import OTPService from "@/services/otp.service.js";
import { OTPStore, sessionStore } from "@/index.js";
import EmailService from "@/services/email.service.js";
import { AuthenticatedUserInfo } from "@/types/authenticatedUserInfo.js";
import { LoginType } from "@/validation/login.validation.js";
import { LoginDeviceInfo } from "@/types/deviceInfo.js";
import { getDeviceInfo } from "@/lib/getDeviceInfo.js";
import { getLocation } from "@/lib/getLocation.js";

function authService() {
  return {
    registerUser,
    loginUser,
    logoutUser,
    verifyRegisterUser,
    ...GoogleService,
  };

  async function registerUser(user: SignupType) {
    // check the user already exists in the database
    const existingUser = await userRepository.findByEmail(user.email);

    if (!existingUser) {
      throw new AppError("User already exists", 400);
    }

    const hashedPassword = await PasswordService.hash(user.password);
    const OTP = OTPService.generate();
    const hashOTP = await OTPService.hashOTP(OTP);

    const key = OTPStore.generateKey(user.email);
    await OTPStore.setUserOtp(key, {
      email: user.email,
      name: user.name,
      hashOTP,
      hashPassword: hashedPassword,
    });

    await EmailService.sendOTPEmail(user.email, user.name, OTP);
  }

  async function verifyRegisterUser(verifyData: VerifySignupType): Promise<AuthenticatedUserInfo> {
    const key = OTPStore.generateKey(verifyData.email);
    const otpData = await OTPStore.getUserOtp(key);

    if (!otpData) {
      throw new AppError("Invalid or expired OTP", 400);
    }

    const isValidOTP = await OTPService.verify(otpData.hashOTP, verifyData.otp);

    if (!isValidOTP) {
      throw new AppError("Invalid OTP", 400);
    }

    try {
      // Create the user in the database
      const user = await userRepository.addUser({
        name: otpData.name,
        avatar: null,
        email: verifyData.email,
        emailVerified: true,
        status: "active",
        provider: "password",
        providerUserId: null,
        providerToken: null,
        hashPassword: otpData.hashPassword,
        seedUrls: [],
      });

      // Remove the used OTP
      await OTPStore.remove(key);

      await EmailService.sendWelcomeEmail(verifyData.email, otpData.name);

      return {
        userId: user._id.toString(),
        name: otpData.name,
        email: verifyData.email,
        avatar: null,
        status: "active",
      };
    } catch {
      throw new AppError("Failed to create user", 500);
    }
  }

  async function loginUser(
    data: LoginType,
    device: LoginDeviceInfo,
  ): Promise<AuthenticatedUserInfo> {
    const user = await userRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError("user doesn't exist", 400);
    }

    // validate password
    if (!user.hashPassword) {
      throw new AppError("Invalid Password", 401);
    }
    const verifyPassword = PasswordService.compare(data.password, user.hashPassword);

    if (!verifyPassword) {
      throw new AppError("Invalid Password", 401);
    }

    const deviceInfo = getDeviceInfo(device.userAgent);
    const location = await getLocation(device.ip);

    await EmailService.sendLoginNotificationEmail(user.email, user.name, deviceInfo, location);

    return {
      userId: user._id.toString(),
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      status: user.status,
    };
  }
  async function logoutUser(sessionId: string) {
    const key = sessionStore.generateKey(sessionId);
    await sessionStore.remove(key);
  }
}

const AuthService = authService();

export default AuthService;
