import { env } from "@/app/app.js";
import { setStore } from "@/app/server.js";
import { getGoogleConfiguration } from "@/config/google.oidc.js";
import {
  authorizationCodeGrant,
  buildAuthorizationUrl,
  calculatePKCECodeChallenge,
  Configuration,
  IDToken,
  randomNonce,
  randomPKCECodeVerifier,
  randomState,
} from "openid-client";
import { AppError } from "@/shared/error/appError.js";
import { userRepository } from "@repo/db/repository/userRepository";
import mongoose from "mongoose";
import { authIdentityRepository } from "@repo/db/repository/authIdentityRepository";
import { sessionService, emailPublisher } from "@/app/server.js";
import { RequestMetadata } from "@/lib/getRequestMetaData.js";
import { formatLocation } from "@/lib/formatLocation.js";
import { ApiError } from "@/shared/error/apiError.js";

const GOOGLE_CALLBACK_URL = `${env.API_ORIGIN}${env.API_BASE_PATH}/auth/google/callback`;

type GoogleStoredDataType = {
  codeVerifier: string;
  nonce: string;
};

type GoogleClaimType = {
  sub: string;
  email: string;
  email_verified: boolean;
  nonce: string;
  name: string;
  picture: string;
};

export class GoogleService {
  constructor(private readonly googleConfig: Configuration) {}

  static async create() {
    const googleConfig = await getGoogleConfiguration();
    return new GoogleService(googleConfig);
  }

  private getRedisKey(state: string) {
    return `google:oauth:${state}`;
  }
  async createAuthorizationUrl() {
    const codeVerifier = randomPKCECodeVerifier();
    const codeChallenge = await calculatePKCECodeChallenge(codeVerifier);
    const state = randomState();
    const nonce = randomNonce();

    const url = buildAuthorizationUrl(this.googleConfig, {
      redirect_uri: GOOGLE_CALLBACK_URL,
      /*
       *   Scope: defines what are fields i need to access
       *   scope <opeid> : define it using openid connect
       */
      scope: "openid email profile",
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
      state,
      nonce,
    });

    const key = this.getRedisKey(state);
    await setStore.add(
      key,
      JSON.stringify({
        codeVerifier,
        nonce,
      }),
      {
        EX: 300,
      },
    );

    return {
      url,
      codeVerifier,
      state,
      nonce,
    };
  }

  private getGoogleClaim(claim: IDToken | undefined): GoogleClaimType {
    if (
      !claim ||
      typeof claim.sub !== "string" ||
      typeof claim.email !== "string" ||
      claim.email_verified !== true ||
      typeof claim.name !== "string" ||
      typeof claim.picture != "string"
    ) {
      throw ApiError.forbidden("Invalid claim from google");
    }

    return {
      sub: claim.sub,
      email: claim.email,
      email_verified: claim.email_verified,
      nonce: claim.nonce || "",
      name: claim.name,
      picture: claim.picture || "",
    };
  }

  getRedirectUrl() {
    return new URL(`${env.APP_URL}/projects`);
  }

  async addUser(state: string, code: string, callbackUrl: URL, metaRequest: RequestMetadata) {
    const key = this.getRedisKey(state);
    const storedState = await setStore.get(key);
    if (!storedState) {
      throw ApiError.forbidden("Invalid state parameter");
    }

    const googleStoredData = JSON.parse(storedState) as GoogleStoredDataType;

    const token = await authorizationCodeGrant(this.googleConfig, callbackUrl, {
      expectedState: state,
      expectedNonce: googleStoredData.nonce,
      pkceCodeVerifier: googleStoredData.codeVerifier,
    });
    const claim = token.claims();

    const googleClaim = this.getGoogleClaim(claim);

    try {
      let user = await userRepository.findByEmail(googleClaim.email);
      const isUserExists = !!user;

      if (!user) {
        const mongoSession = await mongoose.startSession();

        try {
          user = await mongoSession.withTransaction(async () => {
            const newUser = await userRepository.addUser({
              email: googleClaim.email,
              name: googleClaim.name,
              avatar: googleClaim.picture,
              emailVerified: googleClaim.email_verified,
            });

            await authIdentityRepository.addAuthIdentity({
              userId: newUser._id,
              provider: "GOOGLE",
              providerAccountId: googleClaim.sub,
              passwordHash: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            });

            return newUser;
          });
        } finally {
          await mongoSession.endSession();
        }
      }

      // Create application session
      const sessionId = await sessionService.create(
        {
          userId: user._id.toString(),
          email: user.email,
        },
        user._id.toString(),
        metaRequest,
      );

      if (!isUserExists) {
        // if user, does not exist, send welcome email
        await emailPublisher.enqueue({
          eventId: crypto.randomUUID(),
          type: "welcome",
          payload: {
            email: user.email,
            name: user.name,
          },
          createdAt: new Date(),
        });
      } else {
        // if user exists, send login alert email
        await emailPublisher.enqueue({
          eventId: crypto.randomUUID(),
          type: "login_alert",
          payload: {
            email: user.email,
            name: user.name,
            deviceName: metaRequest.userAgent,
            location: formatLocation(metaRequest.location),
            ipAddress: metaRequest.ipAddress,
          },
          createdAt: new Date(),
        });
      }

      return {
        sessionId,
        data: {
          message: "Login successful",
        },
      };
    } catch (error) {
      throw ApiError.internal("Failed to add user");
    }
  }
}
