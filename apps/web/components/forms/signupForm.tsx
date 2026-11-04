"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/button";
import { Divider } from "@repo/ui/components/divider";
import { Input } from "@repo/ui/components/input";
import { PasswordInput } from "@repo/ui/components/passwordInput";
import { GoogleSvg } from "@repo/ui/svg/googleSvg";
import {
  registerEmailRequestSchema,
  type RegisterEmailRequestType,
} from "@repo/contracts/apiContracts/auth/register-email.request";
import { AnimatePresence, motion } from "motion/react";
import { Mail, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  getAuthErrorMessage,
  getFieldErrors,
  useResendSignupOTP,
  useSignup,
} from "../../hooks/useSignup";
import { GoogleLogin } from "../auth/googleLogin";

const OTP_LENGTH = 6;
const OTP_DURATION_MS = 2 * 60 * 1000;

type SignupStep = "register" | "verify";

type SignupFormProps = {
  onRootErrorChange?: (message: string | null) => void;
};

function formatTime(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  return `${String(Math.floor(totalSeconds / 60)).padStart(2, "0")}:${String(
    totalSeconds % 60,
  ).padStart(2, "0")}`;
}

export function SignUpForm({ onRootErrorChange }: SignupFormProps) {
  const [step, setStep] = useState<SignupStep>("register");
  const [email, setEmail] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [remaining, setRemaining] = useState(0);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [rootError, setRootError] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);
  const { registration, verification } = useSignup();
  const resend = useResendSignupOTP();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterEmailRequestType>({
    resolver: zodResolver(registerEmailRequestSchema),
  });

  useEffect(() => {
    onRootErrorChange?.(rootError);
  }, [onRootErrorChange, rootError]);

  useEffect(() => {
    if (!expiresAt) {
      setRemaining(0);
      return;
    }

    const update = () => setRemaining(Math.max(0, expiresAt - Date.now()));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [expiresAt]);

  const onSubmit: SubmitHandler<RegisterEmailRequestType> = async (data) => {
    setRootError(null);
    setSuccessMessage(null);
    try {
      const response = await registration.mutateAsync(data);
      setEmail(data.email);
      setVerificationId(response.verificationID);
      setOtp(Array(OTP_LENGTH).fill(""));
      setExpiresAt(Date.now() + OTP_DURATION_MS);
      setDirection(1);
      setStep("verify");
    } catch (error) {
      const fields = getFieldErrors(error);
      for (const [field, message] of Object.entries(fields)) {
        if (field === "name" || field === "email" || field === "password") {
          setError(field, { type: "server", message });
        }
      }
      setRootError(getAuthErrorMessage(error));
    }
  };

  function updateOtp(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    setOtp((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? digit : item)),
    );
    if (digit && index < OTP_LENGTH - 1) otpRefs.current[index + 1]?.focus();
  }

  function handleOtpKeyDown(
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0)
      otpRefs.current[index - 1]?.focus();
    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1)
      otpRefs.current[index + 1]?.focus();
  }

  function handleOtpPaste(event: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    if (pasted.length !== OTP_LENGTH) return;
    event.preventDefault();
    setOtp(pasted.split(""));
    otpRefs.current[OTP_LENGTH - 1]?.focus();
  }

  async function verifyOtp() {
    setRootError(null);
    try {
      await verification.mutateAsync({ verificationId, otp: otp.join("") });
      window.location.assign("/projects");
    } catch (error) {
      setRootError(getAuthErrorMessage(error));
    }
  }

  async function resendOtp() {
    setRootError(null);
    setSuccessMessage(null);
    try {
      await resend.mutateAsync();
      setOtp(Array(OTP_LENGTH).fill(""));
      setExpiresAt(Date.now() + OTP_DURATION_MS);
      setSuccessMessage(
        "A new verification code request was accepted. Check your email.",
      );
      otpRefs.current[0]?.focus();
    } catch (error) {
      setRootError(getAuthErrorMessage(error));
    }
  }

  return (
    <div className="space-y-6">
      {rootError && (
        <div
          role="alert"
          className="border-error/20 bg-error/10 text-error flex items-start justify-between gap-3 rounded-sm border px-4 py-3 text-sm"
        >
          <span>{rootError}</span>
          <button
            type="button"
            aria-label="Dismiss error"
            onClick={() => setRootError(null)}
            className="focus-visible:outline-error shrink-0 rounded-xs p-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      )}
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        {step === "register" ? (
          <motion.div
            key="register"
            custom={direction}
            initial={{ opacity: 0, x: direction * -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.2 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-5 px-4"
            >
              <div className="space-y-3">
                <h1 className="text-text-primary text-3xl font-semibold tracking-tight">
                  Create your account
                </h1>
                <p className="text-text-secondary text-sm leading-6">
                  Get started with Crawllytics and take control of your
                  website&apos;s SEO.
                </p>
              </div>
              <GoogleLogin />
              <div className="flex items-center gap-4">
                <Divider />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-text-primary text-sm font-medium"
                >
                  First name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  startIcon={<User className="size-4" />}
                  aria-invalid={Boolean(errors.name)}
                  containerClassName={
                    errors.name ? "border-red-500" : undefined
                  }
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-text-primary text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  startIcon={<Mail className="size-4" />}
                  aria-invalid={Boolean(errors.email)}
                  containerClassName={
                    errors.email ? "border-red-500" : undefined
                  }
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-text-primary text-sm font-medium"
                >
                  Password
                </label>
                <PasswordInput
                  id="password"
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.password)}
                  containerClassName={
                    errors.password ? "border-red-500" : undefined
                  }
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="primary"
                disabled={registration.isPending}
              >
                {registration.isPending ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="verify"
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * 24 }}
            transition={{ duration: 0.2 }}
            className="space-y-6 px-4"
          >
            <div className="space-y-3">
              <h1 className="text-text-primary text-3xl font-semibold tracking-tight">
                Verify your email
              </h1>
              <p className="text-text-secondary text-sm leading-6">
                Enter the six-digit code sent to <strong>{email}</strong>.
              </p>
            </div>
            <div
              className="flex justify-between gap-2"
              aria-label="Email verification code"
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    otpRefs.current[index] = element;
                  }}
                  value={digit}
                  inputMode="numeric"
                  maxLength={1}
                  aria-label={`Verification digit ${index + 1}`}
                  onChange={(event) => updateOtp(index, event.target.value)}
                  onKeyDown={(event) => handleOtpKeyDown(index, event)}
                  onPaste={handleOtpPaste}
                  className="border-border-default focus:border-primary bg-surface-base focus-visible:outline-primary/30 h-12 w-11 rounded-xs border text-center text-lg outline-none focus-visible:outline-2"
                />
              ))}
            </div>
            <Button
              type="button"
              variant="primary"
              className="w-full"
              disabled={
                otp.join("").length !== OTP_LENGTH || verification.isPending
              }
              onClick={verifyOtp}
            >
              {verification.isPending ? "Verifying..." : "Verify email"}
            </Button>
            <div className="space-y-2 text-center text-sm">
              {remaining > 0 ? (
                <p className="text-text-secondary">
                  Resend code in {formatTime(remaining)}
                </p>
              ) : (
                <button
                  type="button"
                  className="text-primary font-medium hover:underline"
                  disabled={resend.isPending}
                  onClick={resendOtp}
                >
                  {resend.isPending ? "Requesting..." : "Resend code"}
                </button>
              )}
              {successMessage && (
                <p className="text-sm text-green-600" role="status">
                  {successMessage}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
