import { googleAuthService } from "@/app/server.js";
import { Request, Response } from "express";

export async function googleController(req: Request, res: Response) {
  const response = await googleAuthService.createAuthorizationUrl();

  const authURL = new URL(response.url);
  console.log("href", authURL.href);
  res.status(200).redirect(authURL.href);
}
