import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";

export function HeroInput() {
  return (
    <>
      <div className="border-border-default focus-within:outline-primary-hover flex h-12 w-full max-w-lg overflow-hidden rounded-xs border focus-within:outline-[1.4px] focus-within:outline-offset-1">
        <Input
          placeholder="(eg: https://www.example.com)"
          className="flex-1 rounded-none border-none outline-none"
        />
        <Button variant="primary" className="w-32">
          Analyze
        </Button>
      </div>
    </>
  );
}
