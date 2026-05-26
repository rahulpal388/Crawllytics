import express from "express";
import cors from "cors";
import "dotenv/config";
import { createRedisConnection } from "@repo/queue/queue";
import { ValidateEnv } from "@/lib/validateEnv.js";
import { produce } from "@/produce.js";
import { addToSet, generateSetKey } from "@repo/queue/set";
import { generateHashKey, setDomainStats } from "@repo/queue/hashes";
import { connectDB } from "@repo/db/index";
import { GatherInformationModel } from "@repo/db/model/gatherInformation";
import { getGatherInformation } from "@repo/db/utils/getGatherInformation";

const app = express();
const env = ValidateEnv();

const allowedOrigins = env.CROSS_ORIGIN_URL.split(",")
const port = env.PORT;

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
    url: env.REDIS_URL,
    password: env.REDIS_PASSWORD,
    username: env.REDIS_USERNAME,
})

const dbClient = await connectDB(env.DATABASE_URL);
if (!dbClient) {
    console.error("Failed to connect to the database");
    process.exit(1);
}

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
    const gatherInformation = await GatherInformationModel.create({
        userId: "647b1c8f9c1b8a0015d9c8b4",
        url: url,
        pages: []
    });
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
            id: gatherInformation._id.toString(),
            url,
            visitedSetKey,
            domainStatsKey: domainStatsKey,
            crawlDepth: "0"
        }
    })
    id++;
    res.status(200).json({
        id: gatherInformation._id,
        message: "added url successfully"
    })
})


app.get("/gatherInformation/:id", async (req, res) => {
    const { id } = req.params;
    const data = await getGatherInformation(id);
    if (!data) {
        res.status(404).json({ message: "Gather information not found" });
    } else {
        res.status(200).json(data);
    }
})



app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});