import { create } from "zustand";

export type PageSidebarItemsType =
  | "overview"
  | "issues"
  | "content"
  | "structured-data"
  | "page-monitoring"
  | "internal-backlinks"
  | "internal-links"
  | "external-links"
  | "mobile-page-test"
  | "desktop-page-test"
  | "images"
  | "css"
  | "js"
  | "html-source";

export type PageSideBarStoreType = {
  openItem: PageSidebarItemsType;
  openSidebar: (item: PageSidebarItemsType) => void;
};

export const usePageSideBarStore = create<PageSideBarStoreType>((set) => ({
  openItem: "overview",
  openSidebar: (item) => {
    set({
      openItem: item,
    });
  },
}));
