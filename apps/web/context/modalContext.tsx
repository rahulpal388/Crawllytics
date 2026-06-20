'use client'
import { createContext, FC, ReactNode, useContext, useState } from "react";
import { ModalRender } from "../components/modalRender";


export type ModalType = "create-project"
export type ModalContextType = {
    openModal: (modal: ModalType) => void;
    closeModal: () => void;
}



const modalContext = createContext<ModalContextType | null>(null);


export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [modal, setModal] = useState<ModalType | null>(null);

    const openModal = (modal: ModalType) => {
        setModal(modal);
    }

    const closeModal = () => {
        setModal(null);
    }

    return <>
        <modalContext.Provider value={{ openModal, closeModal }} >
            {children}
            <ModalRender modal={modal} closeModal={closeModal} />
        </modalContext.Provider>
    </>
}



export const useModal = () => {
    const context = useContext(modalContext);
    if (!context) {
        throw new Error("use context useModal inside the provider")

    }
    return context;
}