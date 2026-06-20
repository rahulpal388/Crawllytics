import { ModalType } from "../context/modalContext"


export function ModalRender({ modal, closeModal }: {
    modal: ModalType | null;
    closeModal: () => void;
}) {

    if (!modal) {
        return null;
    }


    return <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50"
                onClick={() => {
                    closeModal();
                }}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-lg p-6">
                <div className="h-full w-full">
                    hello world
                </div>
            </div>
        </div>
    </>
}