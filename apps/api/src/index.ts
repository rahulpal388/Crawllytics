import express from "express";
import cors from "cors";
import "dotenv/config";
import { ValidateEnv } from "@/lib/validateEnv.js";
import { produce } from "@/produce.js";
import { connectDB } from "@repo/db/index";
import { createRedisConnection } from "@repo/queue/client/client";
import { crawlStateStore } from "@repo/queue/stores/crawlState/crawlState"
import { errorHandler } from "@/middlewares/errors/errorHander.js";
import { registerV1Routes } from "@/routes/index.js";
import { registerMiddlerwares } from "@/middlewares/middleware.js";
import { crawlPublisherConfig } from "@repo/queue/streams/publishers/crawlPublisher"
import { logger } from "@repo/lib/logger";
import { urlDeDuplication } from "@repo/queue/stores/deduplication/urlDeDuplication";


export const app = express();
export const env = ValidateEnv();
app.use(express.json());
const port = env.PORT;



// ###################################################
// CORS config
// ###################################################

const allowedOrigins = env.CROSS_ORIGIN_URL.split(",")

app.use(
    cors({
        // to allow multiple origins
        origin: function (origin, callback) {
            if (!origin || allowedOrigins?.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Origin not allowed"))
            }
        },
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);



// ###################################################
//  Create Redis Connection
// ###################################################
const redisClient = await createRedisConnection({
    url: env.REDIS_URL,
    password: env.REDIS_PASSWORD,
    username: env.REDIS_USERNAME,
})

export const crawlStateSt = crawlStateStore(redisClient);

export const crawlPublisher = crawlPublisherConfig(redisClient);
export const urlDeDuplicationStore = urlDeDuplication(redisClient);



// ###################################################
//  Connect to DB
// ###################################################

const dbClient = await connectDB(env.DATABASE_URL);
if (!dbClient) {
    logger.fatal({
        message: "Failed to connect to the database",
        path: "",
        metaData: {
            databaseUrl: env.DATABASE_URL
        }
    })
    process.exit(1);
}


// ###################################################
//  register routes
// ###################################################

registerV1Routes(app);



// ###################################################
//  register middleware
// ###################################################
registerMiddlerwares(app);
app.use(errorHandler);



app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});