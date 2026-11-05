"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  type TooltipItem,
  type ChartData,
  type Chart,
  type TooltipModel,
  type ChartOptions,
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

type ExternalTooltipContext = {
  chart: Chart<"line">;
  tooltip: TooltipModel<"line">;
};

export function LineChartComponent({ data }: LineChartDataType) {
  const [tooltip, setTooltip] = useState<LineToolTipDataType | null>(null);

  const externalTooltipHandler = ({ tooltip }: ExternalTooltipContext) => {
    if (tooltip.opacity === 0) {
      setTooltip(null);
      return;
    }

    setTooltip((prev) => {
      const next: LineToolTipDataType = {
        x: tooltip.caretX,
        y: tooltip.caretY,
        title: tooltip.title[0] ?? "",
        dataPoints: tooltip.dataPoints,
      };

      if (prev?.x === next.x && prev?.y === next.y) {
        return prev;
      }

      return next;
    });
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
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
