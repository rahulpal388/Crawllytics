"use client";

import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { logoutUser } from "../../api/auth.api";
import { useAuthStore } from "../../store/authStore";
import { useSelectedProjectId } from "../../store/useSelectedProjectId";
import { Logo } from "../logo";
import { sideBarItems } from "./sideBar/sideBarItems";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [logoutError, setLogoutError] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const projectId = useSelectedProjectId((state) => state.projectId);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  async function handleLogout() {
    setLogoutError(null);
    try {
      await logoutUser();
      setUser(null);
      router.push("/");
    } catch {
      setLogoutError("Unable to log out. Please try again.");
    }
  }

  const initials =
    user?.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "CU";

  return (
    <header className="border-border-default relative z-20 flex h-14 items-center justify-between border-b bg-surface-base px-4 shadow-sm md:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="rounded-xs p-2 text-text-secondary transition-colors hover:bg-surface-subtle hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <Logo />
      </div>
      <div className="relative">
        <button
          type="button"
          aria-label="Open profile menu"
          aria-expanded={isProfileOpen}
          className="bg-primary flex size-9 items-center justify-center rounded-full text-xs font-semibold text-white transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          onClick={() => setIsProfileOpen((open) => !open)}
        >
          {user?.avatar ? (
            <span
              role="img"
              aria-label={`${user.name} avatar`}
              className="size-full rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${user.avatar})` }}
            />
          ) : (
            initials
          )}
        </button>
        {isProfileOpen && (
          <div className="border-border-muted bg-surface-base absolute top-12 right-0 w-64 rounded-md border p-2 shadow-lg">
            <div className="border-border-muted border-b px-3 py-2">
              <p className="text-sm font-semibold">{user?.name}</p>
              <p className="text-text-secondary truncate text-xs">{user?.email}</p>
            </div>
            <button type="button" disabled className="text-text-secondary w-full cursor-not-allowed rounded-xs px-3 py-2 text-left text-sm opacity-60">
              Profile (TODO)
            </button>
            <button type="button" disabled className="text-text-secondary w-full cursor-not-allowed rounded-xs px-3 py-2 text-left text-sm opacity-60">
              Change Password (TODO)
            </button>
            <button
              type="button"
              className="text-text-primary hover:bg-surface-subtle w-full rounded-xs px-3 py-2 text-left text-sm"
              onClick={() => router.push(projectId ? `/projects/${projectId}/settings` : "/settings")}
            >
              Settings
            </button>
            <button
              type="button"
              className="text-text-primary hover:bg-surface-subtle w-full rounded-xs px-3 py-2 text-left text-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
            {logoutError && <p className="text-error px-3 py-2 text-xs">{logoutError}</p>}
          </div>
        )}
      </div>
      {isMenuOpen && (
        <nav className="border-border-muted bg-surface-base absolute top-14 left-0 w-full border-b p-3 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {sideBarItems.map((item) => {
              const href = item.getHref(projectId);
              const isActive = pathname === href;
              return (
                <a
                  key={item.name}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-11 items-center gap-3 rounded-xs px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isActive ? "bg-primary-active/15 font-medium" : "hover:bg-surface-subtle"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="border-border-muted mt-3 border-t pt-3">
            <button type="button" disabled className="text-text-secondary w-full rounded-xs px-3 py-2 text-left text-sm opacity-60">
              Profile (TODO)
            </button>
            <button type="button" disabled className="text-text-secondary w-full rounded-xs px-3 py-2 text-left text-sm opacity-60">
              Change Password (TODO)
            </button>
            <button type="button" className="text-text-primary hover:bg-surface-subtle w-full rounded-xs px-3 py-2 text-left text-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
