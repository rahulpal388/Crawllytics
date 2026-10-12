import { crawlabilityStaticRules } from "@/module/Crawlability/staticRule.crawlability.js";
import { SEORulesRepository } from "@repo/db/repository/SEORulesRepository"
import { connectDB } from "@repo/db/index"
import { ENV } from "@/config/env.js";
import { indexabilityStaticRules } from "@/module/Indexability/staticRules.indexability.js";
import { metaStaticRules } from "@/module/meta/staticRules.meta.js";
import { socialSharingStaticRules } from "@/module/socialSharing/staticRules.socialSharing.js";

/*
*   This file is use to seed the SEO rules into the databse.
*   To run this file, use the following command: npm run seed (in dev) and npm run seed:prod (in prod)
*/

async function seedSEORules() {
    const rules = [
        ...Object.values(crawlabilityStaticRules),
        ...Object.values(indexabilityStaticRules),
        ...Object.values(metaStaticRules),
        ...Object.values(socialSharingStaticRules),
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

