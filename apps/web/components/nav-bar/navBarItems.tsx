import { cn } from "@repo/ui/utils";

const navBarItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "How it works",
    href: "/how-it-works",
  },
];

export function NavBarItems({ className }: { className?: string }) {
  return (
    <>
      <div className={cn(`flex items-center justify-between gap-8`, className)}>
        {navBarItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:bg-card-hover active:bg-card-hover max-nav:w-full max-nav:px-12 max-nav:py-4 rounded-md p-2"
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}
