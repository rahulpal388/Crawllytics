import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { Input } from "./input";
import { useState } from "react";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function PasswordInput({ ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        type={showPassword ? "text" : "password"}
        startIcon={<LockKeyhole className="size-4" />}
        endIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-text-secondary hover:text-text-primary"
          >
            {showPassword ? <Eye className="size-6" /> : <EyeOff className="size-6" />}
          </button>
        }
        containerClassName="h-11"
        {...props}
      />
    </>
  );
}
