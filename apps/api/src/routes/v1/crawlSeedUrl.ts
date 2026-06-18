import { Router } from "express";
import { crawlSeedUrl } from "@/controler/crawlSeedUrlControler/crawlSeedUrl.controler.js"



export const crawlSeedUrlRouter = Router();


crawlSeedUrlRouter.get("/", crawlSeedUrl)