import { env } from "@/app/app.js";
import PlansService from "@/module/billings/plans/plans.service.js";
import { PRODUCTION_PLANS } from "@/module/billings/plans/production.plan.js";
import { SELF_HOSTED_PLANS } from "@/module/billings/plans/self_host.plan.js";

export async function seedPlans() {
  try {
    if (env.DEPLOYMENT_MODE === "production") {
      console.log(`Seeding production plans...`);
      await PlansService.createPlans(PRODUCTION_PLANS);
      console.log(`Production plans seeded successfully.`);
    } else {
      console.log(`Seeding self-host plans...`);
      await PlansService.createPlans([SELF_HOSTED_PLANS]);
      console.log(`Self-host plans seeded successfully.`);
    }
  } catch (err) {
    console.error("Error seeding plans:", err);
    process.exit(1);
  }
}
