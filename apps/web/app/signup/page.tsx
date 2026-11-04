"use client";
import { SignUpForm } from "../../components/forms/signupForm";
import { AuthLayout } from "../../components/auth/authLayout";

export default function SignupPage() {
  return (
    <AuthLayout
      alternatePrompt="Already have an account?"
      alternateLabel="Sign in"
      alternateHref="/login"
      >
        <SignUpForm />
      </AuthLayout>
  );
}
