import Image from "next/image";
import { motion } from "motion/react";

export function HeroImage() {
  return (
    <>
      <div className="border-border-default relative flex w-full items-center justify-center overflow-hidden rounded-xl border">
        <motion.div
          className="via-primary absolute top-0 h-[2px] w-56 bg-gradient-to-r from-transparent to-transparent"
          animate={{
            x: ["-100%", "500%"],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <Image
          src={"/landingPage.png"}
          alt="landing page"
          width={1023}
          height={840}
          priority
          className="h-auto w-auto object-contain"
          loading="eager"
        />
      </div>
    </>
  );
}
