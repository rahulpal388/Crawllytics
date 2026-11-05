import { create } from "zustand";

type DrawerParams = {
  "view-issues": {
    viewIssuesId: string;
  };
  "view-pages": {
    viewPagesId: string;
    url: string;
    title: string;
  };
  "fix-issues": {
    fixIssuesId: string;
  };
};

export type DrawerType = keyof DrawerParams;

type DrawerEntryType = {
  [K in DrawerType]: {
    type: K;
    param: DrawerParams[K];
  };
}[DrawerType];

type DrawerStoreType = {
  drawers: DrawerEntryType[];
  openDrawer: (drawer: DrawerEntryType) => void;
  closeDrawer: () => void;
};

export const useDrawerStore = create<DrawerStoreType>((set) => ({
  drawers: [],
  openDrawer: (drawer: DrawerEntryType) => {
    set((state) => ({
      drawers: [...state.drawers, drawer],
    }));
  },
  closeDrawer: () => {
    set((state) => ({
      drawers: state.drawers.slice(0, -1),
    }));
  },
}));
