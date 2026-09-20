import { Button } from "@repo/ui/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export function IssuesPagination({
  rowPerPage,
  filterDataLength,
  setCurrentDataView,
  currentDataView,
}: {
  rowPerPage: number;
  filterDataLength: number;
  setCurrentDataView: Dispatch<SetStateAction<number>>;
  currentDataView: number;
}) {
  const totalPages = Math.ceil(filterDataLength / rowPerPage);
  return (
    <>
      <div className="flex items-center gap-4">
        <Button
          size="sm"
          variant={currentDataView - 1 > 0 ? "outline" : "disable"}
          onClick={() => {
            if (currentDataView - 1 > 0) {
              setCurrentDataView(currentDataView - 1);
            }
          }}
        >
          <ChevronLeft size={20} strokeWidth={1.6} />
        </Button>
        {Array(totalPages)
          .fill(1)
          .map((_, idx) => (
            <Button
              key={idx + 1}
              size="sm"
              variant={`${currentDataView === idx + 1 ? "primary" : "outline"}`}
              onClick={() => {
                setCurrentDataView(idx + 1);
              }}
            >
              {idx + 1}
            </Button>
          ))}

        <Button
          size="sm"
          variant={currentDataView + 1 <= totalPages ? "outline" : "disable"}
          onClick={() => {
            if (currentDataView + 1 <= totalPages) {
              setCurrentDataView(currentDataView + 1);
            }
          }}
        >
          <ChevronRight size={20} strokeWidth={1.6} />
        </Button>
      </div>
    </>
  );
}
