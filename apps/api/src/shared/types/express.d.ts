import { AuthenticatedUserType } from "./authenticatedUserInfo.js";

declare global {
    namespace Express {
        interface Request {
            requestId: string;
            user: AuthenticatedUserType;
        }
    }
}

export { }

