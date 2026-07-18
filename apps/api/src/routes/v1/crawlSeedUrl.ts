import { Router } from "express";
import { crawlSeedUrl } from "@/controller/crawlSeedUrl.controler.js";
import { crawlStateSt, emailPublisher } from "@/index.js";

export const crawlSeedUrlRouter = Router();

crawlSeedUrlRouter.get("/email", async (req, res) => {
  const { email } = req.body;
  const eventId = crypto.randomUUID();
  console.log(eventId);
  await emailPublisher.enqueue({
    eventId,
    type: "otp",
    payload: {
      email: email,
      otp: "123456",
      expireIn: 2,
    },
    createdAt: new Date().toISOString(),
  });

  res.status(200).json({
    message: "Email sent successfully",
  });
});

crawlSeedUrlRouter.post("/", crawlSeedUrl);

crawlSeedUrlRouter.get("/:key", async (req, res) => {
  const { key } = req.params;
  const st = await crawlStateSt.get(key);
  res.json(st);
});
