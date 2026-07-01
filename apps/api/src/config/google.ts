import { discovery } from "openid-client";



export const googleConfig = await discovery(new URL("https://accounts.google.com"), "", "");



console.log("Google Config: ", googleConfig)


