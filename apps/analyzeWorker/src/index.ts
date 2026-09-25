import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config";
import os from "os";
import { GatherInfoType } from "@/types/gatherInfoType.js";

import { tempData } from "@/tempData.js";
// @ts-ignore
const ENV = validateEnv();
const CONSUMER_NAME = os.hostname();
console.log("os hostname ", CONSUMER_NAME);

// ###################################################
// redis configs
// ###################################################

// const redisClient = await createRedisConnection({
//   url: ENV.REDIS_URL,
//   password: ENV.REDIS_PASSWORD,
//   username: ENV.REDIS_USERNAME,
// });

// const analyzeConsumer = analyzerConsumerConfig(redisClient, CONSUMER_NAME);

// ###################################################
// DB configs
// ###################################################

// const dbClient = await connectDB(ENV.DATABASE_URL);
// if (!dbClient) {
//   logger.error({
//     message: "Failed to connect to the database",
//     path: "",
//     metaData: {
//       url: ENV.DATABASE_URL,
//     },
//   });
//   process.exit(1);
// }

// ###################################################
// Listen to the analyze stream and process the data
// ###################################################

const seoData = JSON.parse(JSON.stringify(tempData)) as GatherInfoType;

// async function main() {
//   while (true) {
//     const message = await analyzeConsumer.consume();
//     if (!message || message.length === 0 || !message[0]) {
//       continue;
//     }

//     const msg = message[0].message;

//   //   // #############################################
//   //   // get the gather info form the DB
//   //   // #############################################
//     const gatherInfoResponse = await urlCrawledRepository.getUrlCrawledWithoutAnalyzedUrlData(
//       msg._id,
//     );

//     if (!gatherInfoResponse.success || !gatherInfoResponse.data) {
//       continue;
//     }

//     const gatherInfo = gatherInfoResponse.data;

//   //   // #############################################
//   //   // Analyze the Data for each domain
//   //   // #############################################

//   //   // #############################################
//   //   // find issues in analyzed data for each domain
//   //   // #############################################

//   //   // #############################################
//   //   // add analyzed and issues data to db and update the urlCrawled collection
//   //   // #############################################

//   //   // #############################################
//   //   // update the crawlStore
//   //   // #############################################
//   }

// }
// main();

console.log("analyzeWorker started");

// const crawlabilityAnalysis = evaluateCrawlabilityRules(seoData);
// console.log("crawlabilityAnalysis ");
// console.dir(crawlabilityAnalysis, { depth: null, color: true });

// const indexabilityAnalysis = evaluateIndexability(seoData);
// console.log("indexabilityAnalysis ");
// console.dir(indexabilityAnalysis, { depth: null, color: true });

