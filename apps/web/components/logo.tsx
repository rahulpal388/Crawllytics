import Image from "next/image";

type LogoProps = {
  variants?: "full" | "icon";
};

export function Logo({ variants = "full" }: LogoProps) {
  if (variants === "icon") {
    return (
      <>
        <Image
          src="/icon.svg"
          alt="Crawllytics Logo"
          width={32}
          height={32}
          priority
          loading="eager"
        />
      </>
    );
  }
  return (
    <>
      <Image
        src="/logo.svg"
        alt="Crawllytics Logo"
        width={150}
        height={150}
        priority
        loading="eager"
      />
    </>
  );
}
