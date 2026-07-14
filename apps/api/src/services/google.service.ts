import { googleConfig } from "@/config/google.config.js";
import { env, oidcStore } from "@/index.js";
import { AppError } from "@/middlewares/errors/appError.js";
import { authorizationCodeGrant, TokenEndpointResponse, TokenEndpointResponseHelpers } from "openid-client"
import { getGoogleConfiguration } from "@/config/google.config.js";
import axios from "axios";
import { UserInfoType } from "@/types/userInfoType.js";

export function googleService() {
    return {
        createAuthorizationUrl,
        getToken,
        getUserInfo
    }


    async function createAuthorizationUrl() {
        const google = googleConfig();
        try {
            const { state, nonce, codeChallenge, codeVerifier } = await google.generateStates();

            // store the states in Redis

            const key = oidcStore.generateKey(state);

            await oidcStore.add(key, {
                provider: "google",
                state,
                nonce,
                codeChallenge,
                codeVerifier,
                redirectTo: env.REDIRECT_URL
            });

            return google.generateAuthorizationUrl(state, nonce, codeChallenge);


        } catch (error) {
            throw new AppError("Failed to create Google authorization URL", 500, { cause: error });
        }
    }


    async function getToken(state: string, callbackUrl: URL) {
        const key = oidcStore.generateKey(state);
        const data = await oidcStore.get(key);

        if (!data) {
            throw new AppError("No data found for the provided state", 400);
        }

        return await authorizationCodeGrant(
            await getGoogleConfiguration(),
            callbackUrl,
            {
                pkceCodeVerifier: data.codeVerifier,
                expectedState: data.state,
                expectedNonce: data.nonce,
            }
        );

    }

    async function getUserInfo(token: TokenEndpointResponse & TokenEndpointResponseHelpers): Promise<UserInfoType> {

        const userInfo = await axios.get("https://openidconnect.googleapis.com/v1/userinfo", {
            headers: {
                Authorization: `Bearer ${token.access_token}`
            }
        });


        return userInfo.data as UserInfoType;

    }




}