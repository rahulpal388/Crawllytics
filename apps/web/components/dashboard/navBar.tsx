import { Logo } from "../logo";

export function NavBar() {
  return (
    <>
      <div className="border-border-default flex h-12 items-center justify-between border-b px-12 shadow-xs">
        <div>
          <Logo />
        </div>
        <div className="bg-primary size-8 rounded-full"></div>
      </div>
    </>
  );
}
