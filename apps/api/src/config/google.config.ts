import { discovery } from "openid-client";
import { env } from "../index.js";
import {
  randomNonce,
  randomState,
  randomPKCECodeVerifier,
  calculatePKCECodeChallenge,
  buildAuthorizationUrl,
  Configuration,
} from "openid-client";
import { googleRedirectUrl } from "@/lib/googleRedirectUrl.js";

export async function getGoogleConfiguration() {
  return discovery(
    new URL("https://accounts.google.com"),
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
  );
}
export function googleConfig() {
  return {
    generateStates,
    generateAuthorizationUrl,
  };

  async function generateStates() {
    const state = randomState();
    const nonce = randomNonce();
    const codeVerifier = randomPKCECodeVerifier();
    const codeChallenge = await calculatePKCECodeChallenge(codeVerifier);
    return {
      state,
      nonce,
      codeChallenge,
      codeVerifier,
    };
  }

  async function generateAuthorizationUrl(state: string, nonce: string, codeChallenge: string) {
    return buildAuthorizationUrl(await getGoogleConfiguration(), {
      redirect_uri: googleRedirectUrl(),
      scope: "openid email profile",
      state,
      nonce,

      code_challenge: codeChallenge,
      code_challenge_method: "S256",
    });
  }
}
