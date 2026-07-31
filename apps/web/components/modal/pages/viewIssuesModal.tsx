import { useModalStore } from "../../../store/modalStore";
import { Drawer } from "@repo/ui/components/overlay/drawer";

export function ViewIssuesModal() {
  const onClose = useModalStore((s) => s.closeModal);
  return (
    <>
      <Drawer onClose={onClose} className="h-full w-xl">
        <h1>view issues modal</h1>
      </Drawer>
    </>
  );
}
