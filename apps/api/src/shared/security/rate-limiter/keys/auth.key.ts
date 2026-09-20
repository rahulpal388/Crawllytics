import { createRateLimiterKey } from "./createRateLimiter.key.js";
import { Request } from "express";
import { normalize } from "@/lib/normalize.js";

const AUTH_RESOURCE = "auth";

export const authRateLimitKey = {
  loginByIp: (req: Request) => {
    if (!req.ip) {
      throw new Error("Client IP is unavailable");
    }
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "login",
      dimension: "ip",
      identifier: req.ip,
    });
  },
  loginByEmail: (req: Request) => {
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "login",
      dimension: "email",
      identifier: normalize(req.body.email),
    });
  },
  registerByIp: (req: Request) => {
    if (!req.ip) {
      throw new Error("Client IP is unavailable");
    }
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "register",
      dimension: "ip",
      identifier: req.ip,
    });
  },
  registerByEmail: (req: Request) => {
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "register",
      dimension: "email",
      identifier: normalize(req.body.email),
    });
  },

  verifyOtpByIp: (req: Request) => {
    if (!req.ip) {
      throw new Error("Client IP is unavailable");
    }
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "verify-otp",
      dimension: "ip",
      identifier: req.ip,
    });
  },
  forgetPasswordByIp: (req: Request) => {
    if (!req.ip) {
      throw new Error("Client IP is unavailable");
    }
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "forget-password",
      dimension: "ip",
      identifier: req.ip,
    });
  },
  forgetPasswordByEmail: (req: Request) => {
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "forget-password",
      dimension: "email",
      identifier: normalize(req.body.email),
    });
  },
  verifyForgetPasswordByIp: (req: Request) => {
    if (!req.ip) {
      throw new Error("Client IP unavailable");
    }
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "verify-forget-password",
      dimension: "ip",
      identifier: req.ip,
    });
  },
  verifyForgetPasswordByToken: (req: Request) => {
    console.log("token:--------", req.body.token);
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "verify-forget-password",
      dimension: "token",
      identifier: normalize(req.body.token),
    });
  },
  googleLoginByIp: (req: Request) => {
    if (!req.ip) {
      throw new Error("Client IP is unavailable");
    }
    return createRateLimiterKey({
      resource: AUTH_RESOURCE,
      action: "google-login",
      dimension: "ip",
      identifier: req.ip,
    });
  },
};
