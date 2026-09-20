import { hashStore } from "@/app/server.js";
import {
  OTPType,
  OTPVerifiedData,
  OTPCreateDataType,
  OTPStoredData,
} from "@/shared/auth/otp/otp.type.js";
import hashService from "@/shared/security/hash/hash.service.js";
import { HashStoreType } from "@repo/redis/stores/hashStore";
import { randomBytes } from "crypto";
import { AppError } from "@/shared/error/appError.js";
import { OTP_EXPIRY } from "@/shared/auth/otp/otp.constants.js";

export class OtpService {
  constructor(private readonly hashStore: HashStoreType) {}

  private generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private generateKey(otpType: OTPType, verificationID: string) {
    return `otp:${otpType}:${verificationID}`;
  }

  async create(data: OTPCreateDataType): Promise<{ verificationID: string; otp: string }> {
    const otp = this.generateOtp();
    const verificationID = randomBytes(16).toString("base64url");
    const key = this.generateKey(data.type, verificationID);
    const hashOtp = await hashService.hash(otp);
    await this.hashStore.setWithExpire(
      key,
      {
        ...data,
        otp: hashOtp,
      },
      OTP_EXPIRY[data.type],
    );

    return {
      verificationID,
      otp,
    };
  }

  async verify<K extends OTPType>(
    otpType: K,
    verificationId: string,
    userOtp: string,
  ): Promise<OTPVerifiedData<K>> {
    const key = this.generateKey(otpType, verificationId);

    const storedData = await this.hashStore.get<OTPStoredData<K>>(key);

    if (!storedData) {
      throw new AppError("OTP not found or expired", 400);
    }

    const isOtpValid = await hashService.verify(userOtp, storedData.otp);

    if (!isOtpValid) {
      throw new AppError("Invalid OTP", 400);
    }

    await this.hashStore.deleteByKey(key);
    const { otp, ...rest } = storedData;
    return rest;
  }
}
