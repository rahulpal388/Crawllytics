import mongoose from "mongoose";
import UrlCrawledSchema from "../../schema/crawlDomain/crawl.schema.js";

const UrlCrawledModel = mongoose.model("Crawl", UrlCrawledSchema);

export default UrlCrawledModel;
