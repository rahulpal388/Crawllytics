import { Button } from "@repo/ui/components/button";
import { GithubLink } from "@repo/ui/components/githubLink";

import { cn } from "@repo/ui/utils";

export function NavBarButtons({ className }: { className?: string }) {
  return (
    <>
      <div className={cn("flex items-center justify-between gap-4", className)}>
        <Button variant="outline">Sign in</Button>
        <Button variant="primary">Try for free</Button>
      </div>
    </>
  );
}
