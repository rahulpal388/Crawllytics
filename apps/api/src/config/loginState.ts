import { googleConfig } from "@/config/google.js";
import { randomNonce, randomState, randomPKCECodeVerifier, calculatePKCECodeChallenge, buildAuthorizationUrl } from "openid-client"


// #############################################
// store it securely in a database or cache for later verification
// #############################################



export async function generateLoginState() {

    const state = randomState();
    const nonce = randomNonce();
    const codeVerifier = randomPKCECodeVerifier();
    const codeChallenge = await calculatePKCECodeChallenge(codeVerifier);
    return {
        state,
        nonce,
        codeChallenge,
        codeVerifier

    }
}





export function generateGoogleAuthorizationUrl(state: string, nonce: string, codeChallenge: string) {




    return buildAuthorizationUrl(
        googleConfig,
        {
            redirect_uri: "http://localhost:8080/api/v1/auth/google/callback",

            scope: "openid email profile",

            state,

            nonce,

            code_challenge: codeChallenge,

            code_challenge_method: "S256",
        }
    );
}