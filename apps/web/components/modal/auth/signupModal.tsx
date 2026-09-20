import { useModalStore } from "../../../store/modalStore";
import { Button } from "@repo/ui/components/button";
import { GoogleSvg } from "@repo/ui/svg/googleSvg";
import { Divider } from "@repo/ui/components/divider";
import { SignUpForm } from "../../forms/signupForm";
import { Dialog } from "@repo/ui/components/overlay/dialog";

export function SignupModal() {
  const closeModal = useModalStore((state) => state.closeModal);
  return (
    <>
      <Dialog onClose={closeModal}>
        <div className="flex w-full max-w-lg flex-col gap-6 p-6">
          <div className="space-y-2 text-center">
            <h2 className="text-text-primary text-2xl font-semibold">
              Create Your Free Account
            </h2>

            <p className="text-text-secondary text-sm leading-6">
              Sign up to access your SEO projects, crawl reports, issue
              analysis, and personalized dashboard.
            </p>
          </div>
          {/* Google Login */}
          <div>
            <Button
              type="button"
              variant="secondary"
              className="flex h-11 w-full items-center justify-center gap-3"
            >
              <GoogleSvg className="size-5" />
              Continue with Google
            </Button>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-4">
            <Divider />
          </div>
          <SignUpForm />
        </div>
      </Dialog>
    </>
  );
}
