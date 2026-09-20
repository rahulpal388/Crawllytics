import {
  HowToFixType,
  StackType,
} from "@repo/contract/types/apiResponseType/issuesTypes";
import { CodeSnippet } from "../../codeSnippet";
import { ChooseStackComponent } from "./chooseStackComponent";
import { useState } from "react";

export function HowToFixComponent({ howToFix }: { howToFix: HowToFixType }) {
  const [selectedStack, setSelectedStack] = useState<StackType>("next.js-app");
  return (
    <>
      <div className="space-y-2">
        <h5 className="body font-bold">How to fix</h5>
        <p className="caption-xs">{howToFix.description}</p>
        <p className="caption text-text-primary font-bold">Choose your stack</p>
        <ChooseStackComponent
          selectedStack={selectedStack}
          onSelect={setSelectedStack}
        />
        <div className="mt-4">
          <h6 className="body font-bold">
            {howToFix.fixes.find((f) => f.stack === selectedStack)?.label}
          </h6>
          <p className="caption-xs">
            {howToFix.fixes.find((f) => f.stack === selectedStack)?.description}
          </p>
        </div>
        {howToFix.fixes[0] && (
          <CodeSnippet
            language={
              howToFix.fixes.find((f) => f.stack === selectedStack)?.code
                .language || "jsx"
            }
            code={
              howToFix.fixes.find((f) => f.stack === selectedStack)?.code
                .code || ""
            }
          />
        )}
      </div>
    </>
  );
}
