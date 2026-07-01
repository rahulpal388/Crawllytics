import { Express } from "express"
import { crawlSeedUrlRouter } from "@/routes/v1/crawlSeedUrl.js";
import { authRouter } from "@/routes/v1/auth.routes.js";


const API_VERSION = "/api/v1";

// #############################################
//  version 1 routes
// #############################################

export function registerV1Routes(app: Express) {
    app.use(`${API_VERSION}/crawl-seed-url`, crawlSeedUrlRouter);
    app.use(`${API_VERSION}/auth`, authRouter);
}
