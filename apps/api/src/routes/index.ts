import { Express } from "express"
import { crawlSeedUrlRouter } from "@/routes/v1/crawlSeedUrl.js";
import { authRouter } from "@/routes/v1/auth.routes.js";
import { env } from "@/index.js";




// #############################################
//  version 1 routes
// #############################################

export function registerV1Routes(app: Express) {
    app.use(`${env.API_BASE_PATH}/crawl-seed-url`, crawlSeedUrlRouter);
    app.use(`${env.API_BASE_PATH}/auth`, authRouter);
}
