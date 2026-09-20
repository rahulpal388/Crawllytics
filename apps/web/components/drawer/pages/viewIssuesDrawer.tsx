import { useDrawerStore } from "../../../store/drawerStore";
import { Drawer } from "@repo/ui/components/overlay/drawer";

export function ViewIssuesDrawer() {
  const closeDrawer = useDrawerStore((s) => s.closeDrawer);
  return (
    <>
      <Drawer onClose={closeDrawer} className="h-full w-xl">
        <h1>view issues modal</h1>
      </Drawer>
    </>
  );
}
