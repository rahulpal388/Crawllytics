import { ApiError } from "@/shared/error/apiError.js";
import { PlanSchemaType } from "@repo/db/types/billingTypes/plans.type";
import { plansRepository } from "@repo/db/repository/billingSection/planRepository";

function PlansServices() {
  return {
    async createPlans(plans: Omit<PlanSchemaType, "createdAt" | "updatedAt">[]) {
      if (!plans.length) {
        throw new Error("No plans are provided, atleast provide at least one plan to create.");
      }
      return plansRepository.addMany(plans);
    },

    async getAllPlans() {
      const plans = await plansRepository.getAllPlans();

      return plans;
    },
  };
}

const PlansService = PlansServices();
export default PlansService;
