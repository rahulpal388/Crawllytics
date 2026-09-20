import { RegisterEmailRequestType } from "@repo/contracts/apiContracts/auth/register-email.request";

export const OTPTypes = {
  EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
  PASSWORD_RESET: "PASSWORD_RESET",
} as const;

export type OTPType = (typeof OTPTypes)[keyof typeof OTPTypes];

export type OTPStoredDataMap = {
  [OTPTypes.EMAIL_VERIFICATION]: RegisterEmailRequestType & {
    otp: string;
  };

  [OTPTypes.PASSWORD_RESET]: {
    userId: string;
    otp: string;
  };
};

export type OTPStoredDataType = {
  [K in OTPType]: {
    type: K;
  } & OTPStoredDataMap[K];
}[OTPType];

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

export type OTPCreateDataType = DistributiveOmit<OTPStoredDataType, "otp">;

export type OTPStoredData<K extends OTPType> = {
  type: K;
} & OTPStoredDataMap[K];

export type OTPVerifiedData<K extends OTPType> = Omit<OTPStoredData<K>, "otp">;
