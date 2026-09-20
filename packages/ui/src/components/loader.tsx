import { SpiderSvg } from "../svg/spiderSvg";

export function Loader() {
  return (
    <>
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <SpiderSvg className="h-5 w-5 text-red-500" />
        </div>
      </div>
    </>
  );
}
