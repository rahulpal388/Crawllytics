import { crawlabilityStaticRules } from "@/module/Crawlability/staticRule.js";
import { SEORulesRepository } from "@repo/db/repository/SEORulesRepository"
import { connectDB } from "@repo/db/index"
import { ENV } from "@/config/env.js";


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

