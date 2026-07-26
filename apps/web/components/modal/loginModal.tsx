import { Modal } from "@repo/ui/components/modal";
import { Button } from "@repo/ui/components/button";
import { useModalStore } from "../../store/modalStore";
import { GoogleSvg } from "@repo/ui/svg/googleSvg";
import { LoginForm } from "../forms/loginForm";
import { Divider } from "@repo/ui/components/divider";

export function LoginModal() {
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <Modal onClose={closeModal}>
      <div className="flex w-full max-w-md flex-col gap-6 p-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h2 className="text-text-primary text-2xl font-semibold">
            Welcome Back
          </h2>

          <p className="text-text-secondary text-sm leading-6">
            Sign in to your account to access your SEO projects, crawl reports,
            issue analysis, and personalized dashboard.
          </p>
        </div>

        {/* Google Login */}
        <Button
          type="button"
          variant="secondary"
          className="flex h-11 w-full items-center justify-center gap-3"
        >
          <GoogleSvg className="size-5" />
          Continue with Google
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <Divider />
        </div>

        {/* Login Form */}
        <LoginForm />
      </div>
    </Modal>
  );
}
