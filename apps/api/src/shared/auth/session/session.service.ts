import { hashStore } from "@/app/server.js";
import { SessionDataType, SessionInfoType } from "@/shared/auth/session/session.types.js";
import { AppError } from "@/shared/error/appError.js";
import { loginActivityRepository } from "@repo/db/repository/loginActivityRespository";
import { LoginActivitySchemaType } from "@repo/db/types/logActivitySchema.Types";
import { HashStoreType } from "@repo/redis/stores/hashStore";
import mongoose from "mongoose";
import { ApiError } from "@/shared/error/apiError.js";

export const SESSION_EXPIRATION_TIME = 3600;

export class SessionService {
  constructor(private readonly hashStore: HashStoreType) {}

  private generateKey(sessionId: string) {
    return `session:${sessionId}`;
  }

  /*
   *   Create a sessionId and key
   *   store the session in login Activity in DB
   *   store the session in redis with expiration time
   */
  async create(user: SessionDataType, userId: string, sessionInfo: SessionInfoType) {
    const sessionId = crypto.randomUUID();
    const key = this.generateKey(sessionId);
    try {
      await loginActivityRepository.createLoginActivity({
        userId: new mongoose.Types.ObjectId(userId),
        sessionId: sessionId,
        ...sessionInfo,
        createdAt: new Date(),
        lastActiveAt: new Date(),
        expiredAt: new Date(Date.now() + SESSION_EXPIRATION_TIME * 1000),
      });
      await this.hashStore.setWithExpire(key, user, SESSION_EXPIRATION_TIME);
      return sessionId;
    } catch (error) {
      throw ApiError.internal("Failed to create session");
    }
  }

  async get(sessionId: string) {
    const key = this.generateKey(sessionId);
    return await this.hashStore.get<SessionDataType>(key);
  }

  async delete(sessionId: string) {
    const key = this.generateKey(sessionId);
    await this.hashStore.deleteByKey(key);
  }
}
