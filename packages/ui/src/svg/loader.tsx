"use client";
import { motion } from "motion/react";
import { useState } from "react";

export function LoaderSvg({
  isActive,
  isCompleted,
  onComplete,
}: {
  isActive: boolean;
  isCompleted: boolean;
  onComplete: () => void;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-check-icon lucide-circle-check"
    >
      {!isActive && !isCompleted && (
        <circle cx="12" cy="12" r="10" stroke="#9ca3af" strokeDasharray="4 4" fill="transparent" />
      )}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: isActive ? 1 : isCompleted ? 1 : 0,
          opacity: isActive ? 1 : isCompleted ? 1 : 0,
          fill: isCompleted ? "#22c55e" : "transparent",
          stroke: isCompleted ? "transparent" : "#9ca3af",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {
          if (isActive) {
            onComplete();
          }
        }}
      />

      <motion.path
        d="m9 12 2 2 4-4"
        className="stroke-white"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: isActive || isCompleted ? 1 : 0,
          opacity: isActive || isCompleted ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}
