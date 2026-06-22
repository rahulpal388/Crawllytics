import { Button } from "@repo/ui/components/button";
import { Logo } from "../logo";
import { GithubSvg } from "@repo/ui/svg/githubSvg";
import { Menu } from "lucide-react";
import { NavDropDown } from "./navDropDown";
import { MobileNavMenu } from "./mobileNavMenu";
import { NavBarItems } from "./navBarItems";
import { NavBarButtons } from "./navBarButtons";
import { GithubLink } from "@repo/ui/components/githubLink";

export function LandingNavBar() {
  return (
    <>
      <div className="flex w-full items-center justify-between lg:pl-12">
        <div className="max-xs:w-26">
          <Logo />
        </div>
        {/* <div className="xs:hidden">
          <Logo varients="icon" />
        </div> */}

        {/* for bigger screen */}
        <NavBarItems className="max-nav:hidden" />
        <div className="max-nav:hidden flex items-center justify-between gap-4">
          <GithubLink />
          <NavBarButtons />
        </div>

        {/* for smaller screen */}

        <MobileNavMenu />
      </div>
    </>
  );
}
