import Image from "next/image";
import { motion } from "motion/react";

export function HeroImage() {
  return (
    <>
      <div className="relative overflow-hidden rounded-xl border border-border-default">
        <motion.div
          className="absolute top-0 h-[2px] w-56 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{
            x: ["-100%", "500%"],
            opacity: [1, 1, 1, 0],
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
          className="w-full h-auto object-contain"
          loading="eager"
        />
      </div>
    </>
  );
}
