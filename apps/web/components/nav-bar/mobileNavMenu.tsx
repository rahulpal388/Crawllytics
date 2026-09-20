"use client";
import { Button } from "@repo/ui/components/button";
import { Menu, X } from "lucide-react";
import { NavDropDown } from "./navDropDown";
import { useState } from "react";
import { GithubLink } from "@repo/ui/components/githubLink";

export function MobileNavMenu() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="nav:hidden flex items-center justify-between gap-6">
      <GithubLink />
      <Button
        variant="outline"
        className="py-2"
        onClick={() => setIsMenu((prev) => !prev)}
      >
        {isMenu ? <X size={24} className="rotate-90" /> : <Menu size={24} />}
      </Button>
      <NavDropDown isOpen={isMenu} />
    </div>
  );
}
