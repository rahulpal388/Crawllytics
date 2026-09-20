import {
  PageSidebarItemsType,
  usePageSideBarStore,
} from "../../store/pageSidebarStore";

type PageSidebarItemType = {
  item: PageSidebarItemsType;
  label: string;
};

const pageSidebarItems: PageSidebarItemType[] = [
  {
    item: "overview",
    label: "Overview",
  },
  {
    item: "issues",
    label: "Issues",
  },
  {
    item: "content",
    label: "Content",
  },
  {
    item: "structured-data",
    label: "Structured Data",
  },
  {
    item: "page-monitoring",
    label: "Page Monitoring",
  },
  {
    item: "internal-backlinks",
    label: "Internal Backlinks",
  },
  {
    item: "internal-links",
    label: "Internal Links",
  },
  {
    item: "external-links",
    label: "External Links",
  },
  {
    item: "mobile-page-test",
    label: "Mobile Page Test",
  },
  {
    item: "desktop-page-test",
    label: "Desktop Page Test",
  },
  {
    item: "images",
    label: "Images",
  },
  {
    item: "css",
    label: "CSS",
  },
  {
    item: "js",
    label: "JS",
  },
  {
    item: "html-source",
    label: "HTML Source",
  },
];

export function PageSidebar() {
  const currentSideBarItem = usePageSideBarStore((s) => s.openItem);
  return (
    <div className="border-border-default scrollbar-hover relative flex h-full w-full flex-col justify-between gap-2 border-r px-4 py-2 shadow-xl">
      <div className="space-y-4">
        {pageSidebarItems.map((sidebarItem) => (
          <PageSideBarItem
            key={sidebarItem.item}
            isActive={currentSideBarItem === sidebarItem.item}
            item={sidebarItem}
          />
        ))}
      </div>
    </div>
  );
}

function PageSideBarItem({
  item,
  isActive,
}: {
  item: PageSidebarItemType;
  isActive: boolean;
}) {
  const openSideBar = usePageSideBarStore((s) => s.openSidebar);
  return (
    <>
      <div
        className={`hover:bg-page-sideBar body-sm cursor-pointer rounded px-4 py-1 ${isActive && "bg-page-sideBar"} `}
        onClick={() => {
          openSideBar(item.item);
        }}
      >
        <p>{item.label}</p>
      </div>
    </>
  );
}
