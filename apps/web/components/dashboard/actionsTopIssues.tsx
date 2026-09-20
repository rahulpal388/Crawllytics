"use client";
import { Button } from "@repo/ui/components/button";
import { useModalStore } from "../../store/modalStore";

export function ActionsTopIssues() {
  const openModal = useModalStore((s) => s.openModal);
  return (
    <>
      <div className="jusc flex flex-wrap items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            openModal("view-issues");
          }}
        >
          View Issues
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            openModal("view-pages");
          }}
        >
          View Pages
        </Button>
      </div>
    </>
  );
}
