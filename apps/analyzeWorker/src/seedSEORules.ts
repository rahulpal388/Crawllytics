import { crawlabilityStaticRules } from "@/module/Crawlability/staticRule.crawlability.js";
import { SEORulesRepository } from "@repo/db/repository/SEORulesRepository"
import { connectDB } from "@repo/db/index"
import { ENV } from "@/config/env.js";

/*
*   This file is use to seed the SEO rules into the databse.
*   To run this file, use the following command: npm run seed (in dev) and npm run seed:prod (in prod)
*/

async function seedSEORules() {
    const rules = [
        ...Object.values(crawlabilityStaticRules)
    ]

    await SEORulesRepository.bulkInsert(rules);
}

async function seed() {
    try {
        await connectDB(ENV.DATABASE_URL);
        await seedSEORules();

        console.log("SEO rules seeded successfully");

        process.exit(0);
    } catch (error) {
        console.error("SEO rule seeding failed:", error);

        process.exit(1);
    }
}

seed();

