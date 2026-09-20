import { StackType } from "@repo/contract/types/apiResponseType/issuesTypes";
import { Button } from "@repo/ui/components/button";
import { Clipboard } from "lucide-react";

const chooseStack: {
  stack: StackType;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    stack: "next.js-app",
    label: "Next.js (App Router )",
    icon: <Clipboard />,
  },
  {
    stack: "next.js-page",
    label: "Next.js (Page Router)",
    icon: <Clipboard />,
  },
  {
    stack: "react",

    label: "React",
    icon: <Clipboard />,
  },
  {
    stack: "html",
    label: "HTML",
    icon: <Clipboard />,
  },
];

export function ChooseStackComponent({
  selectedStack,
  onSelect,
}: {
  selectedStack: StackType;
  onSelect: (stack: StackType) => void;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        {chooseStack.map((st, idx) => (
          <div key={idx}>
            <Button
              variant={selectedStack === st.stack ? "primary" : "outline"}
              onClick={() => onSelect(st.stack)}
            >
              {st.label}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
