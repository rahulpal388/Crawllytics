"use client";
import { Divider } from "@repo/ui/components/divider";
import { LoginForm } from "../../components/forms/loginForm";
import { Button } from "@repo/ui/components/button";
import { GoogleSvg } from "@repo/ui/svg/googleSvg";
import { AuthLayout } from "../../components/auth/authLayout";
import { X } from "lucide-react";
import { useState } from "react";
import { GoogleLogin } from "../../components/auth/googleLogin";

export default function LoginPage() {
  const [rootError, setRootError] = useState<string | null>(null);

  return (
    <AuthLayout
      alternatePrompt="Don't have an account?"
      alternateLabel="Sign up"
      alternateHref="/signup"
    >
      <div className="space-y-8">
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
        <div className="space-y-3">
          <h1 className="text-text-primary text-3xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-text-secondary text-sm leading-6">
            Sign in to continue to Crawllytics.
          </p>
        </div>

        <div className="space-y-6">
          <GoogleLogin />

          <div className="flex items-center gap-4">
            <Divider />
          </div>

          <LoginForm onRootErrorChange={setRootError} />
        </div>
      </div>
    </AuthLayout>
  );
}
