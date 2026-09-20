"use client";
import { Button } from "@repo/ui/components/button";

import { cn } from "@repo/ui/utils";
import { useModalStore } from "../../store/modalStore";

export function NavBarButtons({ className }: { className?: string }) {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <>
      <div className={cn("flex items-center justify-between gap-4", className)}>
        <Button variant="outline" onClick={() => openModal("login")}>
          Sign in
        </Button>
        <Button variant="primary" onClick={() => openModal("signup")}>
          Try for free
        </Button>
      </div>
    </>
  );
}
