import { Drawer } from "@repo/ui/components/overlay/drawer";
import { useModalStore } from "../../../store/modalStore";

export function PagesModal() {
  const onClose = useModalStore((s) => s.closeModal);
  return (
    <>
      <Drawer onClose={onClose} className="h-full w-5xl">
        <h1> page modal</h1>
      </Drawer>
    </>
  );
}
