import { useDrawerStore } from "../../../store/drawerStore";
import { Drawer } from "@repo/ui/components/overlay/drawer";
import { PageSidebar } from "../../pages/pageSidebar";
import { PageContents } from "../../pages/pageContents";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Loader } from "@repo/ui/components/loader";

export function ViewPagesDrawer() {
  const { closeDrawer, drawers } = useDrawerStore();
  const currentDrawer = drawers.at(-1);
  const currOpenDrawer =
    currentDrawer?.type === "view-pages" ? currentDrawer.param : null;

  if (!currOpenDrawer) {
    return null;
  }
  return (
    <>
      <Drawer
        onClose={closeDrawer}
        className="h-full w-6xl overflow-hidden"
        containerClassName=" px-0 "
      >
        <div className="border-border-muted w-full border-b px-4 py-2">
          <h3 className="heading-3 text-text-primary flex w-full items-center gap-2">
            <span className="font-bold">Page Details: </span>
            <Link
              href={currOpenDrawer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link flex items-center justify-center gap-2 font-bold"
            >
              <span className="max-w-[32rem] truncate">
                {currOpenDrawer.url}
              </span>
              <SquareArrowOutUpRight />
            </Link>
          </h3>
          <p className="caption-xs text-text-secondary">
            {currOpenDrawer.title}
          </p>
        </div>
        <div className="mt-4 flex h-full w-full">
          <div className="h-full w-[14rem]">
            <PageSidebar />
          </div>
          <div className="h-full flex-1">
            <PageContents />
          </div>
        </div>
      </Drawer>
    </>
  );
}
