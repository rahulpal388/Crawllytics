import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { PasswordInput } from "@repo/ui/components/passwordInput";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginEmailRequestSchema,
  LoginEmailRequestType,
} from "@repo/contracts/apiContracts/auth/login-email.request";
import { useLogin } from "../../hooks/useLogin";

type LoginFormProps = {
  onRootErrorChange?: (message: string | null) => void;
};

export function LoginForm({ onRootErrorChange }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginEmailRequestType>({
    resolver: zodResolver(loginEmailRequestSchema),
  });
  const loginMutation = useLogin(setError);

  useEffect(() => {
    onRootErrorChange?.(errors.root?.message ?? null);
  }, [errors.root?.message, onRootErrorChange]);

  const onSubmit: SubmitHandler<LoginEmailRequestType> = (data) =>
    loginMutation.mutateAsync(data).then(() => undefined);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-5 px-4"
    >
      {/* Email */}
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
          containerClassName={`h-11${errors.email ? " border-red-500" : ""}`}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "login-email-error" : undefined}
          {...register("email")}
        />

        {errors.email && (
          <p id="login-email-error" className="text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
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
          autoComplete="current-password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "login-password-error" : undefined}
          containerClassName={`h-11${errors.password ? " border-red-500" : ""}`}
          {...register("password")}
        />

        {errors.password && (
          <p id="login-password-error" className="text-xs text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/*  Forgot Password */}
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="text-primary cursor-pointer text-sm font-medium hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting || loginMutation.isPending}
        className="mt-2 w-full"
      >
        {isSubmitting || loginMutation.isPending ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
