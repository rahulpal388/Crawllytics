import { useModalStore } from "../../../store/modalStore";
import { Drawer } from "@repo/ui/components/overlay/drawer";

export function ViewPagesModal() {
  const onClose = useModalStore((s) => s.closeModal);
  return (
    <>
      <Drawer onClose={onClose} className="h-full w-xl">
        <h1>view page modal</h1>
      </Drawer>
    </>
  );
}
