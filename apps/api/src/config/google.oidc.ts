import { discovery } from "openid-client";
import { env } from "@/app/app.js";

export async function getGoogleConfiguration() {
  return discovery(
    new URL("https://accounts.google.com"),
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
  );
}
