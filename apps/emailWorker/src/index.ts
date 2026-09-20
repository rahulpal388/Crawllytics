import "dotenv/config";
import { validateEnv } from "@/utils/validateEnv.js";
import { createRedisConnection } from "@repo/redis/client/client";
import { emailConsumerConfig } from "@repo/redis/streams/consumers/emailConsumer";
import os from "os";
import { Resend } from "resend";
import { createConsumerGroup } from "@repo/redis/client/createConsumerGroup";
import { sendEmail } from "@/utils/sendEmail.js";
import { logger } from "@repo/lib/logger";

export const env = validateEnv();

// #############################################
// Resend intialization
// #############################################

export const resend = new Resend(env.RESEND_API_KEY);

// #############################################
// Create Redis Connection
// #############################################

const redisClient = await createRedisConnection({
  url: env.REDIS_URL,
  password: env.REDIS_PASSWORD,
  username: env.REDIS_USERNAME,
});

await createConsumerGroup({
  redisClient,
  key: "email_stream",
  group: "email_stream_group",
});

const emailConsumer = emailConsumerConfig(redisClient, os.hostname());

async function main() {
  console.log("email worker is running...........");
  while (true) {
    const message = await emailConsumer.consume();
    if (!message || message.length === 0 || !message[0]?.message) {
      continue;
    }
    const msg = message[0].message;

    // Process the message here
    // send the email
    console.log(msg.payload);
    try {
      const response = await sendEmail(msg);
      console.log("Email sent successfully", response);
      logger.info({
        requestId: msg.eventId,
        message: "Email sent successfully",
        path: ".",
      });
    } catch (error) {
      logger.error({
        requestId: msg.eventId,
        message: error instanceof Error ? error.message : "unknown error",
        path: ".",
      });
    }
  }
}

main();
