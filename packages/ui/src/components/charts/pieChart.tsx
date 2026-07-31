"use client";

import { useMemo, type ReactNode } from "react";
import { ArcElement, Chart as ChartJS, ChartData, ChartOptions, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { cn } from "@repo/ui/utils";

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

export function DoughnutChart({
  data,
  className,
  center,
  cutout = "68%",
  showLegend = false,
  showTooltip = true,
  borderWidth = 3,
  borderRadius = 8,
  hoverOffset = 4,
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
    <div className={cn("relative h-full w-full", className)}>
      <Doughnut data={chartData} options={chartOptions} />

      {center && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {center}
        </div>
      )}
    </div>
  );
}
