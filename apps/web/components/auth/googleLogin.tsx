import { Button } from "@repo/ui/components/button";
import { GoogleSvg } from "@repo/ui/svg/googleSvg";

export function GoogleLogin() {
  return (
    <Button
      type="button"
      variant="secondary"
      className="flex h-11 w-full items-center justify-center gap-3"
      onClick={() => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/google`;
      }}
    >
      <GoogleSvg className="size-5" />
      Continue with Google
    </Button>
  );
}
