"use client";
import { Button } from "@repo/ui/components/button";

export default function Login() {
  return (
    <>
      <div className="bg-surface-base flex h-screen w-screen items-center justify-center">
        <Button
          variant="outline"
          onClick={() => {
            window.location.href = "http://localhost:8080/api/v1/auth/google";
          }}
        >
          Login With Google
        </Button>
      </div>
    </>
  );
}
