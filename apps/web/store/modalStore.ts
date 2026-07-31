import { create } from "zustand";



export type ModalType = "login" | "signup" | "page" | "view-issues" | "view-pages"


interface ModalStore {
    open: boolean;
    modalType: ModalType | null;
    openModal: (modalType: ModalType) => void;
    closeModal: () => void;
}


export const useModalStore = create<ModalStore>((set) => ({
    open: false,
    modalType: null,
    openModal: (modalType: ModalType) => set({ open: true, modalType }),
    closeModal: () => set({ open: false, modalType: null }),
}))