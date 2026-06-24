import { LineToolTipDataType } from "./lineChart";
import { motion } from "motion/react";
export function CustomTooltip({
  toolTip,
  children,
}: {
  toolTip: LineToolTipDataType;
  children?: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        className="border-border-muted bg-surface-muted absolute z-50 rounded-sm border p-4"
        initial={{
          x: toolTip.x + 40,
          y: toolTip.y - 100,
        }}
        animate={{
          x: toolTip.x + 40,
          y: toolTip.y - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
      >
        <div className="flex flex-col gap-2 text-xs">
          <p className="heading font-semibold">
            {toolTip.dataPoints[0]?.label}
          </p>
          {toolTip.dataPoints.map((dataPoint, index) => {
            const currentIndex = dataPoint.dataIndex || 0;
            console.log(dataPoint.dataset.borderColor);
            return (
              <div key={index} className="items-between flex gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`size-2 rounded-full bg-emerald-500`}
                    style={{
                      backgroundColor: dataPoint.dataset.borderColor as string,
                    }}
                  />
                  <span className="subHeading font-semibold">
                    {dataPoint.dataset.label}
                  </span>
                </div>

                <span className="subHeading font-semibold">
                  {dataPoint.dataset.data[currentIndex] as number}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
