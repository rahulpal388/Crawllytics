'use client'
import { Button } from "@repo/ui/components/button";
import { ProjectTable } from "../../components/projectTable";
import { InfoCard } from "@repo/ui/components/infoCard";
import { useModal } from "../../context/modalContext";
import { Plus } from "lucide-react";

const value: { title: string; value: number }[] = [
  {
    title: "Total Pages",
    value: 120,
  },
  {
    title: "Pages Crawled",
    value: 200,
  },
  {
    title: "Total Issues",
    value: 10,
  },
  {
    title: "Broken Links",
    value: 10,
  },
];

export default function DashboardPage() {
  const { openModal } = useModal();
  return (
    <>
      <div className="h-full w-full  px-8 py-12   ">
        <div className="w-full   flex items-center justify-between gap-8 ">
          {value.map((x, idx) => (
            <InfoCard
              key={idx}
              title={x.title}
              value={x.value}
              className="w-full h-28 "
            />
          ))}
        </div>
        <div className=" mt-8 py-4 w-full border border-neutral-200/40 rounded-lg shadow-2xl ">
          <div className=" flex items-center justify-between px-4 ">
            <h2 className=" text-3xl font-semibold ">Project</h2>
            <Button
              variant="primary"
              onClick={() => {
                openModal("create-project");
              }}
            >
              <Plus />
              Create new Project</Button>
          </div>
          <div>
            <ProjectTable />
          </div>
        </div>
      </div>
    </>
  );
}
