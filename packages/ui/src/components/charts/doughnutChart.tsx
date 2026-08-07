"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  ArcElement,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  Tooltip,
  TooltipItem,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { cn } from "@repo/ui/utils";
import { DoughnutTooltip } from "./doughnutTooltip";

ChartJS.register(ArcElement, Tooltip, Legend);

export type DoughnutChartItem = {
  label: string;
  value: number;
  color: string;
};

type DoughnutChartProps = {
  data: DoughnutChartItem[];

  className?: string;

  center?: ReactNode;

  cutout?: string | number;

  showLegend?: boolean;
  showTooltip?: boolean;

  borderWidth?: number;
  borderRadius?: number;
  hoverOffset?: number;

  animate?: boolean;

  options?: ChartOptions<"doughnut">;
};

const defaultOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,

  cutout: "68%",

  layout: {
    padding: 0,
  },

  interaction: {
    mode: "nearest",
    intersect: true,
  },

  animation: {
    duration: 250,
    easing: "easeOutQuart",
  },

  plugins: {
    legend: {
      display: false,
      position: "bottom",
      align: "center",

      labels: {
        usePointStyle: true,
        pointStyle: "circle",

        boxWidth: 10,
        boxHeight: 10,
        padding: 16,

        color: "var(--color-text-primary)",

        font: {
          size: 13,
          weight: 500,
        },
      },
    },

    tooltip: {
      enabled: true,

      displayColors: true,

      backgroundColor: "rgba(15,23,42,.95)",

      titleColor: "#fff",

      bodyColor: "#fff",

      padding: 12,

      cornerRadius: 8,
    },
  },

  elements: {
    arc: {
      borderWidth: 3,
      borderRadius: 8,
      hoverOffset: 4,
      borderColor: "#fff",
    },
  },
};

export type DoughnutTootleTipType = {
  x: number;
  y: number;
  title: string;
  dataPoints: TooltipItem<"doughnut">[];
};

export function DoughnutChart({
  data,
  className,
  center,
  cutout = "68%",
  showLegend = false,
  showTooltip = false,
  borderWidth = 1,
  borderRadius = 12,
  hoverOffset = 8,
  animate = true,
  options,
}: DoughnutChartProps) {
  const chartData = useMemo<ChartData<"doughnut">>(
    () => ({
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => item.value),
          backgroundColor: data.map((item) => item.color),
        },
      ],
    }),
    [data],
  );

  const [tooltip, setTooltip] = useState<DoughnutTootleTipType | null>(null);

  const externalTooltipHandler = (context: any) => {
    const { tooltip } = context;
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

  const chartOptions: ChartOptions<"doughnut"> = {
    ...defaultOptions,

    cutout,

    animation: animate ? defaultOptions.animation : false,

    plugins: {
      ...defaultOptions.plugins,

      legend: {
        ...defaultOptions.plugins?.legend,
        display: showLegend,
      },

      tooltip: {
        ...defaultOptions.plugins?.tooltip,
        enabled: showTooltip,
        external: externalTooltipHandler,
      },
    },

    elements: {
      arc: {
        ...defaultOptions.elements?.arc,

        borderWidth,
        borderRadius,
        hoverOffset,
      },
    },

    ...options,
  };

  return (
    <div className={cn("relative h-full w-full ", className)}>
      <Doughnut data={chartData} options={chartOptions} />
      {tooltip && <DoughnutTooltip tooltip={tooltip} />}
    </div>
  );
}
