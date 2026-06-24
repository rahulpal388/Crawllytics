"use client";
import { useEffect, useRef, useState } from "react";
import { LoaderSvg } from "../svg/loader";
import { motion, useInView } from "motion/react";
import { cn } from "../utils";

export function StepAnimation({
  className,
  content,
  isCompleted,
  isActive,
  isLast,
  setActiveStep,
  index,
}: {
  className?: string;
  content: string;
  isCompleted: boolean;
  isActive: boolean;
  isLast: boolean;
  index: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className={cn("flex gap-4", className)}>
        <div className="relative">
          <LoaderSvg
            isActive={isActive}
            isCompleted={isCompleted}
            onComplete={() => {
              if (isActive) {
                setActiveStep(index + 1);
              }
            }}
          />

          {!isLast && <Connector complete={isCompleted} />}
        </div>
        <span
          className={`${isCompleted ? "text-text-primary" : "text-text-tertiary/40"}`}
        >
          {content}
        </span>
      </div>
    </>
  );
}

export function StepAnimationComponent({
  stepContent,
}: {
  stepContent: string[];
}) {
  const [activeStep, setActiveStep] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setActiveStep(0);
    } else {
      setActiveStep(-1);
    }
  }, [isInView]);
  return (
    <>
      <div ref={ref}>
        {stepContent.map((content, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;
          return (
            <StepAnimation
              key={index}
              className="mt-8"
              content={content}
              isCompleted={index < activeStep}
              isActive={index === activeStep}
              isLast={index === stepContent.length - 1}
              setActiveStep={setActiveStep}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

function Connector({ complete }: { complete: boolean }) {
  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2">
      {/* Dashed background line */}
      <div
        className="absolute w-[2px]"
        style={{
          height: 32,
          background:
            "repeating-linear-gradient(to bottom, #9ca3af 0 4px, transparent 4px 8px)",
        }}
      />

      {/* Animated green progress */}
      <motion.div
        className="absolute w-[2px] bg-green-500 origin-top"
        style={{
          height: 32,
        }}
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: complete ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      />
    </div>
  );
}
