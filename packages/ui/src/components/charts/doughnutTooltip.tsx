import { DoughnutTootleTipType } from "./doughnutChart";

export function DoughnutTooltip({ tooltip }: { tooltip: DoughnutTootleTipType }) {
  return (
    <>
      <div
        className="absolute border-[1px] border-surface-muted w-24 z-10 rounded-lg bg-white p-4 shadow-sm"
        style={{
          left: tooltip.x + 10,
          top: tooltip.y + 40,
        }}
      >
        <h3 className="heading-6">{tooltip.title}</h3>
        <ul>
          {tooltip.dataPoints.map((point, index) => {
            const bg = point.dataset.backgroundColor as string[];

            return (
              <li key={index} className="subHeading caption  ">
                <span
                  className="inline-block h-2 w-2  rounded-full mr-2"
                  style={{ backgroundColor: bg[point.dataIndex] }}
                ></span>
                {point.label}: {point.parsed}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
