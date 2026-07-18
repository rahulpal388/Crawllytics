export enum EmailType {
  WELCOME = "welcome",
  PASSWORD_RESET = "password_reset",
  LOGIN_ALERT = "login_alert",
  OTP = "otp",
}

export type EmailStreamMessageType<T extends EmailType = EmailType> = {
  eventId: string;
  type: T;
  payload: EmailPayloadMap[T];
  createdAt: Date;
};

export type EmailStreamMessage = {
  [K in EmailType]: EmailStreamMessageType<K>;
}[EmailType];

interface EmailPayloadMap {
  [EmailType.WELCOME]: WelcomePayload;
  [EmailType.OTP]: OtpPayload;
  [EmailType.PASSWORD_RESET]: PasswordResetPayload;
  [EmailType.LOGIN_ALERT]: LoginAlertPayload;
}

interface WelcomePayload {
  email: string;
  name: string;
}

interface PasswordResetPayload {
  email: string;
  name: string;
  deviceName: string;
}

interface LoginAlertPayload {
  email: string;
  name: string;
  deviceName: string;
  location: string;
}

interface OtpPayload {
  email: string;
  otp: string;
  expireIn: number;
}
