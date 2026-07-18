import { create } from "zustand";
import { persist } from "zustand/middleware";

type SelectedProjectIdType = {
  projectId: string | null;
  setProjectId: (projectId: string) => void;
  deleteProjectId: () => void;
};

export const useSelectedProjectId = create<SelectedProjectIdType>()(
  persist(
    (set, get) => ({
      projectId: null,
      setProjectId: (projectId: string) => set({ projectId }),
      deleteProjectId: () => set({ projectId: null }),
    }),
    {
      name: "selected-project-id",
    },
  ),
);
