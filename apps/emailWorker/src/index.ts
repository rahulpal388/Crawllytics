import "dotenv/config";
import { validateEnv } from "@/utils/validateEnv.js";
import { createRedisConnection } from "@repo/queue/client/client";
import { emailConsumerConfig } from "@repo/queue/streams/consumers/emailConsumer";
import os from "os";
import { Resend } from "resend";
import { createConsumerGroup } from "@repo/queue/client/createConsumerGroup";
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
  while (true) {
    const message = await emailConsumer.consume();
    if (!message || message.length === 0 || !message[0]?.message) {
      continue;
    }
    const msg = message[0].message;

    // Process the message here
    // send the email
    try {
      console.log("Message Received");
      console.log(msg.payload);
      const response = await sendEmail(msg);

      if (!response) {
        throw new Error("Error sending email");
      }

      console.log(`Email of type ${msg.type} has send to email ${msg.payload.email}`);
      console.log(response);
    } catch (error) {
      logger.error({
        message: "Error Sending email",
        path: ".",
      });
      console.log(error);
    }
  }
}

main();
