import express from "express";
import cors from "cors";
import "dotenv/config";
import { createRedisConnection } from "@repo/queue/queue";
import { ValidateEnv } from "@/lib/validateEnv.js";
import { produce } from "@/produce.js";
import { addToSet, generateSetKey } from "@repo/queue/set";
import { generateHashKey, setDomainStats } from "@repo/queue/hashes";

const app = express();
ValidateEnv();

const allowedOrigins = process.env.CROSS_ORIGIN_URL.split(",")
const port = process.env.PORT;

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

app.use(express.json());

export const redisClient = await createRedisConnection({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
    username: process.env.REDIS_USERNAME,
})

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

let id = 1;
app.post("/api/url", async (req, res) => {
    const { url } = req.body;
    const urlObj = new URL(url);
    console.log(urlObj);
    const visitedSetKey = generateSetKey(urlObj.hostname);
    const domainStatsKey = generateHashKey(urlObj.hostname);
    await addToSet({
        client: redisClient,
        key: visitedSetKey,
        value: url
    });
    await setDomainStats({
        client: redisClient,
        key: domainStatsKey,
        message: {
            totalUrls: 1,
            totalUrlsCrawled: 0
        }
    })
    await produce({
        key: "crawl:url",
        message: {
            id: id.toString(),
            url,
            visitedSetKey,
            domainStatsKey: domainStatsKey,
            crawlDepth: "0"
        }
    })
    id++;
    res.status(200).json({
        message: "added url successfully"
    })
})



app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});