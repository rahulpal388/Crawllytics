import Image from "next/image";

type LogoProps = {
  varients?: "full" | "icon";
};

export function Logo({ varients = "full" }: LogoProps) {
  if (varients === "icon") {
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
