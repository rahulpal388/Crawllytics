import { env } from "@/app/app.js";
import { SESSION_EXPIRATION_TIME } from "@/shared/auth/session/session.service.js";
import { CookieOptions, Request, Response } from "express";

const SESSION_COOKIE_NAME = "sessionId";

class CookieService {
  private getCookieOption(): CookieOptions {
    return {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_EXPIRATION_TIME * 1000, // 7 days
      domain: env.NODE_ENV === "production" ? env.COOKIE_DOMAIN : undefined,
    };
  }
  setCookie(res: Response, sessionId: string) {
    res.cookie(SESSION_COOKIE_NAME, sessionId, this.getCookieOption());
  }

  getSessionId(req: Request): string | undefined {
    const sessionId = req.cookies[SESSION_COOKIE_NAME];
    console.log("Session ID from cookie:", sessionId);
    return sessionId;
  }

  clearCookie(res: Response) {
    res.clearCookie(SESSION_COOKIE_NAME, this.getCookieOption());
  }
}

const cookieService = new CookieService();

export default cookieService;
