import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { PasswordInput } from "@repo/ui/components/passwordInput";
import { Mail, User } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    if (data.password === data.confirmPassword) {
      console.log(data);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5 px-4"
      >
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-text-primary text-sm font-medium"
          >
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            startIcon={<User className="size-4" />}
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
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
            autoComplete="new-password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="text-text-primary text-sm font-medium"
          >
            Confirm Password
          </label>
          <PasswordInput
            id="confirmPassword"
            placeholder="Confirm your password"
            autoComplete="new-password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
        </div>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </form>
    </>
  );
}
