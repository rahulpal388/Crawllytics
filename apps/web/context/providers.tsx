'use client'

import { ReactNode } from "react"
import { ModalProvider } from "./modalContext"

export function Providers({ children }: { children: ReactNode }) {
    return <>
        <ModalProvider>
            {children}
        </ModalProvider>
    </>
}