import { Router } from "express";
import { crawlSeedUrl } from "@/controller/crawlSeedUrl.controler.js"
import { crawlStateSt } from "@/index.js"


export const crawlSeedUrlRouter = Router();


crawlSeedUrlRouter.post("/", crawlSeedUrl)


crawlSeedUrlRouter.get("/:key", async (req, res) => {
    const { key } = req.params;
    const st = await crawlStateSt.get(key);
    res.json(st);
});