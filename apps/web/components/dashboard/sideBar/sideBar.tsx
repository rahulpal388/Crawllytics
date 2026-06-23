"use client";
import { Button } from "@repo/ui/components/button";
import { Logo } from "../../logo";
import { SideBarItems } from "./sideBarItems";
import {
  Code,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <motion.div
        initial={{ width: isOpen ? 200 : 60 }}
        animate={{ width: isOpen ? 200 : 60 }}
        transition={{ duration: 0.3 }}
        className="border-border-default relative flex w-50 flex-col justify-between gap-4 border-r px-4 py-6 shadow-xl"
      >
        {isOpen ? (
          <PanelLeftClose
            size={26}
            className="absolute top-4 -right-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <PanelLeftOpen
            size={26}
            className="absolute top-4 -right-4 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
        <div className="mt-8">
          <SideBarItems isOpen={isOpen} />
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="outline" className="w-full px-px">
            <Plus size={20} className="" />
            {isOpen && "Add Project"}
          </Button>
          <Button variant="primary" className="w-full px-px">
            <LogOut size={20} />
            {isOpen && "Logout"}
          </Button>
        </div>
      </motion.div>
    </>
  );
}
