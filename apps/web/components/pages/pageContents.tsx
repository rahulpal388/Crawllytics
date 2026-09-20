import { usePageSideBarStore } from "../../store/pageSidebarStore";
import { PageContentsRepository } from "./pageContentsResposity";

export function PageContents() {
  const currentPageSideBar = usePageSideBarStore((state) => state.openItem);

  const SideBarContent = PageContentsRepository[currentPageSideBar];

  return <SideBarContent />;
}
