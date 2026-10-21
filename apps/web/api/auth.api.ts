import { apiClient } from "./apiClient";

export async function logoutUser(): Promise<void> {
  await apiClient.get("/auth/logout");
}

/*
 * TODO: Replace the temporary auth state with a current-user endpoint when the
 * backend exposes one. Profile and password-change actions should also move
 * behind typed API functions before they are enabled in the menu.
 */
