import mongoose from "mongoose";
import UrlCrawlSchema from "../schema/crawlSchema/crawl.schema.js";

const UrlCrawledModel = mongoose.model("Crawl", UrlCrawlSchema);

export default UrlCrawledModel;
