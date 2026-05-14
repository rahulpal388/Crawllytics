import express from "express";
import cors from "cors";
import "dotenv/config";
import { createRedisConnection } from "@repo/queue/queue";
import { ValidateEnv } from "@/lib/validateEnv.js";

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

export const queue = await createRedisConnection({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
    username: process.env.REDIS_USERNAME,
})

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});



app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});