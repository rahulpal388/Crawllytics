"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { cn } from "../../utils";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type TrendChartProps = {
  labels: string[];
  values: number[];

  height?: number;

  showXAxis?: boolean;
  showYAxis?: boolean;

  showGrid?: boolean;

  showArea?: boolean;

  showTooltip?: boolean;

  tension?: number;
  className?: string;
};

export function TrendChart({
  labels,
  values,
  height,
  showXAxis,
  showYAxis,
  showGrid,
  showArea,
  showTooltip,
  tension,
  className,
}: TrendChartProps) {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: "#ef4444",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          // chartArea is undefined on first render
          if (!chartArea) {
            return "rgba(239,68,68,0.2)";
          }

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);

          gradient.addColorStop(0, "rgba(239,68,68,0.45)");
          gradient.addColorStop(0.5, "rgba(239,68,68,0.15)");
          gradient.addColorStop(1, "rgba(239,68,68,0)");

          return gradient;
        },
        fill: showArea,
        tension,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: showTooltip,
      },
    },

    scales: {
      x: {
        display: showXAxis,

        grid: {
          display: showGrid,
        },

        border: {
          display: false,
        },
      },

      y: {
        display: showYAxis,

        grid: {
          display: showGrid,
        },

        border: {
          display: false,
        },
      },
    },

    elements: {
      point: {
        radius: 0,
        hoverRadius: 4,
      },
    },
  };
  return (
    <div style={{ height }} className={cn("w-full", className)}>
      <Line data={data} options={options} />
    </div>
  );
}
