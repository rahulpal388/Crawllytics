import { Router } from "express";
import authRouter from "@/module/auth/auth.route.js";
import projectRouter from "@/module/project/project.route.js";
import { authenticateMiddleware } from "@/infrastructure/middleware/authenticate.middleware.js";
import { healthCheckMiddleware } from "@/infrastructure/middleware/healthCheck.Middleware.js";

const apiRouter = Router();

/*    Health check  */

apiRouter.get("/health", healthCheckMiddleware);
apiRouter.use("/auth", authRouter);
apiRouter.use("/project", authenticateMiddleware, projectRouter);

export default apiRouter;
