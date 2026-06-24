import { LineChartComponent } from "./lineChart";

export const searchConsoleData = {
  labels: [
    "2026-06-01",
    "2026-06-02",
    "2026-06-03",
    "2026-06-04",
    "2026-06-05",
    "2026-06-06",
    "2026-06-07",
  ],
  datasets: [
    {
      label: "Clicks",
      data: [312, 278, 341, 295, 387, 334, 421],
      borderColor: "#3b82f6",
      pointRadius: 0,
      tension: 0.4,
    },
    {
      label: "Impressions",
      data: [8421, 7912, 9184, 8642, 10321, 9541, 11248],
      borderColor: "#8b5cf6",
      pointRadius: 0,
      tension: 0.4,
    },
  ],
};
export function GoogleSearchConsoleCard() {
  return (
    <div className="project-card-features flex flex-col gap-4 px-4 py-4">
      <div>
        <p className="text-md font-semibold">Google Search Console</p>
      </div>
      <div>
        <LineChartComponent data={searchConsoleData} />
      </div>
    </div>
  );
}
