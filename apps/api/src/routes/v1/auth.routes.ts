import { googleConfig } from "@/config/google.js";
import { generateGoogleAuthorizationUrl, generateLoginState } from "@/config/loginState.js";
import axios from "axios";
import { Router } from "express";
import * as client from "openid-client";


export const authRouter = Router();


let loginState: {
    state: string;
    nonce: string;
    codeChallenge: string;
    codeVerifier: string;
} | null = null;



authRouter.get("/google", async (req, res) => {
    const { state, nonce, codeChallenge, codeVerifier } = await generateLoginState();
    loginState = null;
    loginState = { state, nonce, codeChallenge, codeVerifier };
    const authorizationUrl = generateGoogleAuthorizationUrl(state, nonce, codeChallenge);
    console.log("Authorization URL: ", authorizationUrl.toString());
    res.redirect(authorizationUrl.toString());

})


authRouter.get("/google/callback", async (req, res) => {

    const { state, code } = req.query;

    if (typeof state !== "string" || typeof code !== "string") {
        res.status(400).send("Invalid state or code");
        return;
    }

    if (loginState === null) {
        res.status(400).send("No login state found");
        return;
    }

    if (loginState.state !== state) {
        res.status(400).send("Invalid state");
        return;
    }
    console.log("req url ", req.originalUrl)
    try {


        const tokens = await client.authorizationCodeGrant(
            googleConfig,
            new URL(req.originalUrl, "http://localhost:8080"),
            {
                pkceCodeVerifier: loginState.codeVerifier,
                expectedState: loginState.state,
                expectedNonce: loginState.nonce,
            }
        );

        if (!tokens) {
            return res.send("login error")
        }
        const userinfo = await axios.get("https://openidconnect.googleapis.com/v1/userinfo", {
            headers: {
                Authorization: `Bearer ${tokens.access_token}`
            }
        })


        console.log("userinfo ", userinfo.data)

        console.log("Tokens: ", tokens);

        // console.log("Google Callback: ", req.query);
        res.redirect("http://localhost:3000/projects");
    }
    catch (error) {
        console.log("Error in authorizationCodeGrant: ", error);
        res.redirect("http://localhost:3000/login?error=login_failed")
    }


})