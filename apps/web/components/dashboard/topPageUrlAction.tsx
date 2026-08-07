"use client";
import { Button } from "@repo/ui/components/button";
import { useModalStore } from "../../store/modalStore";

export function TopPageUrlAction({ url }: { url: string }) {
  const openModal = useModalStore((s) => s.openModal);
  return (
    <Button
      variant="ghost"
      size="md"
      className="px-0"
      onClick={() => {
        openModal("page");
      }}
    >
      <span className="hover:underline">{url}</span>
    </Button>
  );
}
