import { Router } from "express";
import authRouter from "@/module/auth/auth.route.js";
import projectRouter from "@/module/project/project.route.js";
import { authenticateMiddleware } from "@/infrastructure/middleware/authenticate.middleware.js";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/project", authenticateMiddleware, projectRouter);

export default apiRouter;
