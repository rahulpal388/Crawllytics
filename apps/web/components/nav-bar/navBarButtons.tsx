"use client";
import { Button } from "@repo/ui/components/button";

import { cn } from "@repo/ui/utils";
import { useRouter } from "next/navigation";

export function NavBarButtons({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <>
      <div className={cn("flex items-center justify-between gap-4", className)}>
        <Button variant="outline" onClick={() => router.push("/login")}>
          Sign in
        </Button>
        <Button variant="primary" onClick={() => router.push("/signup")}>
          Try for free
        </Button>
      </div>
    </>
  );
}
