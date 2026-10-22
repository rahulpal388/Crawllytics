"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { apiClient } from "../api/apiClient";
import { logoutUser } from "../api/auth.api";

export function useLogout() {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: logoutUser,

        onSuccess: async () => {
            // Remove the cached authenticated user.
            queryClient.setQueryData(["auth", "user"], null);

            // Clear other potentially user-specific cached data.
            queryClient.clear();

            router.replace("/login");
            router.refresh();
        },
    });
}