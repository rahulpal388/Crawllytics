import { LineChartComponent } from "./lineChart";

export const analyticsData = {
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
      label: "Users",
      data: [1542, 1321, 1784, 1498, 2012, 1673, 2245],
      borderColor: "#10b981",
      pointRadius: 0,
      tension: 0.4,
    },
    {
      label: "Sessions",
      data: [2134, 1891, 2487, 2210, 2874, 2451, 3148],
      borderColor: "#f59e0b",
      pointRadius: 0,
      tension: 0.4,
    },
  ],
};
export function GoogleAnalytic() {
  return (
    <div className="project-card-features flex flex-col gap-4 px-4 py-4">
      <div>
        <p className="text-md font-semibold">Google Analytics</p>
      </div>
      <div>
        <LineChartComponent data={analyticsData} />
      </div>
    </div>
  );
}
