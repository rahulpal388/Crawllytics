import "dotenv/config";

import { app, env } from "./app.js";

import { getRedisClient } from "@/infrastructure/redis/client.js";

import { initilizeRedisStores } from "@/infrastructure/redis/stores.js";
import { initializeDatabse } from "@/infrastructure/db/connectDb.js";
import { SessionService } from "@/shared/auth/session/session.service.js";
import { OtpService } from "@/shared/auth/otp/otp.service.js";
import geoIpService from "@/lib/getLocation.js";
import { SlidingWindow } from "@repo/rate-limiter/algo/silidingWindow";
import { GoogleService } from "@/module/auth/google/google.service.js";
import { crawlInfoStoreConfig } from "@repo/redis/stores/crawl-store/crawlInfoStore";


/*
*   connect to the redis server
*   intilize the redis stores, producer and consumer
*/
const redisClient = await getRedisClient();

export const {
    setStore,
    crawlPublisher,
    emailPublisher,
    urlDeDuplicationStore,
    sortedSetStore,
    hashStore
} = initilizeRedisStores(redisClient);
export const crawlStore = new crawlInfoStoreConfig(redisClient);

/*
*   connect to the database
*/

const dbClient = await initializeDatabse();


/*
*   intilize application services and inject the dependencies
*/

export const sessionService = new SessionService(hashStore);
export const otpService = new OtpService(hashStore);
await geoIpService.initialize();
export const slidingWindowRateLimit = new SlidingWindow(sortedSetStore);

export const googleAuthService = await GoogleService.create();

/*
* HTTP server
*/

const server = app.listen(env.PORT, () => {
    console.log(`API server is running on port ${env.PORT}`)
});



/*
* Graceful shutdown
*/

const shutdown = async (signal: string) => {
    console.log(`${signal} received. Shutting down server...`)

    server.close(async () => {
        /*
        * Closing resources before exiting the process
        * */
        console.log("Closing resources...")
        await redisClient.quit();
        await dbClient.connection.disconnect();

        process.exit(0);
    });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));