import { Button } from "@repo/ui/components/button";
import { Logo } from "./logo";
import { GithubSvg } from "@repo/ui/svg/githubSvg";

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

export function LandingNavBar() {
  return (
    <>
      <div className="flex w-full items-center justify-between pl-12">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-between gap-8">
          {navBarItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <a
            href="https://github.com/rahulpal388/Crawllytics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSvg />
          </a>
          <Button variant="outline">Sign in</Button>
          <Button variant="primary">Try for free</Button>
        </div>
      </div>
    </>
  );
}
