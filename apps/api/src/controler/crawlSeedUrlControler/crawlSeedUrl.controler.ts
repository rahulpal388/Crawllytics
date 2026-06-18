import { Request, Response, NextFunction } from "express"
import { AppError } from "@/middlewares/errors/appError.js"
import { crawlSeedUrlBodySchema } from "@/validator/crawlValitator.js"
import { crawlServices } from "@/services/crawlServies.js"





export async function crawlSeedUrl(req: Request, res: Response, next: NextFunction) {


    try {
        const { data, success, error } = crawlSeedUrlBodySchema.safeParse(req.body);
        if (!success) {
            throw new AppError("Invalid request body", 400);
        }

        const result = await crawlServices.startCrawl(data);
        res.status(201).json(result);

    } catch (err) {
        next(err);
    }
}