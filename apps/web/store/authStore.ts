import { create } from "zustand";

export type AuthUser = {
  name: string;
  email: string;
  avatar: string | null;
};

type AuthStore = {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  // TODO: Replace this temporary user with a session bootstrap request.
  user: {
    name: "Crawllytics User",
    email: "user@example.com",
    avatar: null,
  },
  setUser: (user) => set({ user }),
}));
