"use client";
import { useModalStore } from "../../store/modalStore";
import { LoginModal } from "./loginModal";
import { SignupModal } from "./signupModal";

export function ModalRender() {
  const { open, modalType, closeModal } = useModalStore();

  if (!open || !modalType) return null;

  switch (modalType) {
    case "login":
      return <LoginModal />;
    case "signup":
      return <SignupModal />;
    default:
      return null;
  }
}
