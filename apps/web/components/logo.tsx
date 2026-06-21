import Image from "next/image";

export function Logo() {
  return (
    <>
      <div className="text-text-primary">
        <Image
          src="/logo.svg"
          alt="Crawllytics Logo"
          width={150}
          height={150}
        />
      </div>
    </>
  );
}
