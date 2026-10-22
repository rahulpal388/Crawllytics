import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginUser } from "../api/auth.api";
import axios from "axios";
import { UseFormSetError } from "react-hook-form";
import { LoginEmailRequestType } from "@repo/contracts/apiContracts/auth/login-email.request";



export function useLogin(
    setError: UseFormSetError<LoginEmailRequestType>
) {
    const queryClient = useQueryClient();
    const router = useRouter();


    return useMutation({
        mutationFn: loginUser,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["auth", "user"],
            });
            router.replace("/dashboard");
            router.refresh();
        },
        onError: (error) => {
            if (!axios.isAxiosError(error)) {
                setError("root", {
                    message: "Something went wrong. Please try again.",
                });
                return;
            }

            const status = error.response?.status;
            const apiError = error.response?.data?.error;

            if (apiError?.field === "email") {
                setError("email", {
                    type: "server",
                    message: apiError.message,
                });
                return;
            }

            if (status && status >= 500) {
                setError("root", {
                    message: "Our server is having trouble. Please try again later.",
                });
                return;
            }

            if (status && status === 404) {
                setError("root", {
                    message: "User Not Found."
                })
                return;
            }
            if (status && status === 429) {
                setError("root", {
                    message: "Too many requests. Please try again later."
                })
                return;
            }


            setError("root", {
                message: apiError?.message ?? "Unable to complete your request.",
            });
        },
    });
}
