"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";
import { AuthUser } from "@repo/contracts/apiContracts/apiResponse/auth-login.response";

export function useUser() {
  return useQuery({
    queryKey: ["auth", "user"],
    queryFn: async () => {
      const { data } = await apiClient.get<{ user: AuthUser }>("/auth/userInfo");
      return data.user;
    },
    staleTime: 60_000,
  });
}
