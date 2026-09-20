"use client";
import { modalRegistry } from "./modalRegistry";
import { useModalStore } from "../../store/modalStore";

export function ModalRender() {
  const { open, modalType } = useModalStore();

  if (!open || !modalType) return null;

  const Modal = modalRegistry[modalType];
  return <Modal />;
}
