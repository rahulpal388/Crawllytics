import { Button } from "@repo/ui/components/button";
import { useModalStore } from "../../store/modalStore";

export function ActionsPageSectionTable() {
  const openModal = useModalStore((s) => s.openModal);
  return (
    <>
      <Button
        variant="outline"
        onClick={() => {
          openModal("page");
        }}
      >
        Fix Issues
      </Button>
    </>
  );
}
