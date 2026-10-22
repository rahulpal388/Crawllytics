"use client";
import { Button } from "@repo/ui/components/button";
import { SideBarItems } from "./sideBarItems";
import { LogOut, PanelLeftClose, PanelLeftOpen, Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { logoutUser } from "../../../api/auth.api";
import { useModalStore } from "../../../store/modalStore";
import { useUser } from "../../../hooks/user.hook";
import { useLogout } from "../../../hooks/useLogout";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [logoutError, setLogoutError] = useState<string | null>(null);
  const { mutateAsync: LogoutMutateAsync } = useLogout();
  const openModal = useModalStore((state) => state.openModal);

  async function handleLogout() {
    setLogoutError(null);
    try {
      await LogoutMutateAsync();
    } catch {
      setLogoutError("Unable to log out. Please try again.");
    }
  }

  return (
    <>
      <motion.div
        initial={{ width: isOpen ? 200 : 60 }}
        animate={{ width: isOpen ? 200 : 60 }}
        transition={{ duration: 0.3 }}
        className="border-border-default bg-surface-base relative flex w-50 flex-col justify-between gap-4 border-r px-4 py-6 shadow-sm"
      >
        {isOpen ? (
          <button
            type="button"
            aria-label="Collapse sidebar"
            className="border-border-default bg-surface-base text-text-secondary hover:text-text-primary focus-visible:outline-primary absolute top-4 -right-4 rounded-xs border p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={() => setIsOpen(false)}
          >
            <PanelLeftClose size={18} strokeWidth={1.8} />
          </button>
        ) : (
          <button
            type="button"
            aria-label="Expand sidebar"
            className="border-border-default bg-surface-base text-text-secondary hover:text-text-primary focus-visible:outline-primary absolute top-4 -right-4 rounded-xs border p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={() => setIsOpen(true)}
          >
            <PanelLeftOpen size={18} strokeWidth={1.8} />
          </button>
        )}
        <div className="mt-8">
          <SideBarItems isOpen={isOpen} />
        </div>
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="w-full px-px"
            onClick={() => openModal("create-project")}
          >
            <Plus size={20} className="" />
            {isOpen && "Add Project"}
          </Button>
          <Button
            variant="primary"
            className="w-full px-px"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            {isOpen && "Logout"}
          </Button>
          {logoutError && isOpen && (
            <p className="text-error text-xs">{logoutError}</p>
          )}
        </div>
      </motion.div>
    </>
  );
}
