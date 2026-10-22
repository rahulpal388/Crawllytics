import "server-only";
import getSessionCookies from "../../lib/getSessionCookies";
import { redirect } from "next/navigation";
import { serverApiClient } from "./serverApiClient";
import axios from "axios";

export async function getUser() {
  const cookie = await getSessionCookies("sessionId");

  console.log("sessionId cookie:", cookie);

  if (!cookie) {
    redirect("/login");
  }

  try {
    const res = await serverApiClient.get("/auth/userInfo");
    return res.data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      (error.response?.status === 401 || error.response?.status === 403)
    ) {
      redirect("/login");
    }

    throw error;
  }
}
