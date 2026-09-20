import { CrawlProjectController } from "@/module/project/crawl/crawl.controller.js";
import { CreateProject } from "@/module/project/project/create-project.controller.js";
import { DeleteProject } from "@/module/project/project/delete-project.controller.js";
import { Router } from "express";

const projectRouter = Router();

/*
* TODO : 
    1. Add the rate limiters for the project routes
*/

projectRouter.post("/create", CreateProject);
projectRouter.delete("/delete", DeleteProject);

projectRouter.get("/crawl", CrawlProjectController);

export default projectRouter;
