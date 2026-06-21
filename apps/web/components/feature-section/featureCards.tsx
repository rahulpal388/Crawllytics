import { StepAnimationComponent } from "@repo/ui/components/stepAnimation";
import { FeatureCardProps } from "@repo/ui/types/featureCardProps";
import Image from "next/image";
import { cn } from "../../../../packages/ui/src/utils";

export function FeatureCards({
  title,
  description,
  index,
  image,
  className,
  steps,
}: FeatureCardProps & { index: number; className?: string }) {
  return (
    <>
      <div className={cn("flex gap-8", className)}>
        <div className={`flex-1/2 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
          <h3 className="mt-2 text-[1.5rem] font-bold tracking-tight text-pretty text-gray-900">
            {title}
          </h3>
          <p className="subHeading">{description}</p>
          <StepAnimationComponent stepContent={steps} />
        </div>
        <div className={`flex-1/2 ${index % 2 !== 0 ? "order-1" : "order-2"}`}>
          <Image
            src={image.path}
            height={400}
            width={500}
            alt={image.alt}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
