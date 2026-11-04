import { Button } from "@repo/ui/components/button";
import { Search } from "lucide-react";

export function GoogleSearchConsoleCard() {
  return (
    <section className="border-border-muted border-b p-5 xl:border-r xl:border-b-0" aria-labelledby="search-console-title">
      <h2 id="search-console-title" className="heading-6">
        Search Console
      </h2>
      <p className="caption mt-4">
        Connect Search Console to track organic clicks and impressions.
      </p>
      <Button variant="outline" className="mt-5 w-full justify-start" disabled>
        <Search size={16} />
        Connect Search Console (TODO)
      </Button>
    </section>
  );
}
