"use client";
import { useDrawerStore } from "../../store/drawerStore";
import { DrawerRegistery } from "./drawerRegistery";

export function DrawerRender() {
  const drawers = useDrawerStore((s) => s.drawers);
  const activeDrawer = drawers.at(-1);

  if (!activeDrawer) {
    return null;
  }
  const DrawerComponent = DrawerRegistery[activeDrawer.type];
  return (
    <>
      <DrawerComponent />
    </>
  );
}
