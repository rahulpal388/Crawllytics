import crypto from "node:crypto";
import { SessionStoreType } from "@repo/queue/types/sessionStoreType";
import { sessionStore } from "@/index.js";
import { AppError } from "@/middlewares/errors/appError.js";

function sessionService() {

    return {
        createSession,
        deleteSession,
        validateSession
    }

    async function createSession(info: SessionStoreType) {
        const sessionId = crypto.randomUUID();
        console.log("sessionId ", sessionId)

        try {

            const key = sessionStore.generateKey(sessionId);
            await sessionStore.add(key, info);

            return sessionId;
        } catch (error) {
            throw new AppError("Failed to create session", 500, { cause: error });
        }

    }

    async function deleteSession(sessionId: string) {
        const key = sessionStore.generateKey(sessionId);
        await sessionStore.remove(key);
    }

    async function validateSession(sessionId: string) {
        const key = sessionStore.generateKey(sessionId);
        return await sessionStore.get(key);
    }

}


const SessionService = sessionService();
export default SessionService;