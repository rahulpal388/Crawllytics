import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { PasswordInput } from "@repo/ui/components/passwordInput";
import { LockKeyhole, Mail, User } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    console.log(data);
  };

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
          containerClassName="h-11"
          {...register("email", {
            required: "Email is required",
          })}
        />

        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
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
          {...register("password", {
            required: "Password is required",
          })}
        />

        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Remember Me + Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="text-text-secondary flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="size-4"
          />
          Remember me
        </label>

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
        disabled={isSubmitting}
        className="mt-2 w-full"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
