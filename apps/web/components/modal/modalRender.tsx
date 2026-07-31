"use client";
import { modalRegistry } from "../../constant/modalRegistry";
import { useModalStore } from "../../store/modalStore";

export function ModalRender() {
  const { open, modalType, closeModal } = useModalStore();

  if (!open || !modalType) return null;

  const Modal = modalRegistry[modalType];
  return <Modal />;
}
