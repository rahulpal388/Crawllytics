"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  TooltipItem,
  ChartData,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { CustomTooltip } from "./CustomTooltip";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

export type LineChartDataType = {
  data: ChartData<"line", number[], string>;
};

export type LineToolTipDataType = {
  x: number;
  y: number;
  title: string;
  dataPoints: TooltipItem<"line">[];
};

export function LineChartComponent({ data }: LineChartDataType) {
  const [tooltip, setTooltip] = useState<LineToolTipDataType | null>(null);
  const externalTooltipHandler = (context: any) => {
    const { chart, tooltip } = context;
    console.log(chart);
    if (tooltip.opacity === 0) {
      setTooltip(null);
      return;
    }

    setTooltip((prev) => {
      const next = {
        x: tooltip.caretX,
        y: tooltip.caretY,
        title: tooltip.title[0],
        dataPoints: tooltip.dataPoints,
      };

      if (prev?.x === next.x && prev?.y === next.y) {
        return prev;
      }

      return next;
    });
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    radius: 4,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
      },
    },
  };

  return (
    <div className="relative h-14 w-full p-2">
      <Line data={data} options={options} />
      {tooltip && <CustomTooltip toolTip={tooltip} />}
    </div>
  );
}
