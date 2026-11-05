import { PlanSchemaType } from "../../types/billingTypes/plans.type.js";
import PlanModel from "../../model/billingDomainModel/plan.model.js";
import mongoose from "mongoose";

export const plansRepository = {
  add,
  addMany,
  getPlanById,
  getPlanBySlug,
  getAllPlans,
};

async function add(plan: PlanSchemaType) {
  return PlanModel.create(plan);
}

async function addMany(plans: PlanSchemaType[]) {
  const operations = plans.map((plan) => ({
    updateOne: {
      filter: { slug: plan.slug },
      update: { $setOnInsert: plan },
      upsert: true,
    },
  }));
  return PlanModel.bulkWrite(operations);
}

async function getPlanById(id: mongoose.Types.ObjectId) {
  const plan = await PlanModel.findById(id).lean();
  if (!plan) {
    return null;
  }

  return plan;
}

async function getPlanBySlug(slug: string) {
  const plan = await PlanModel.findOne({ slug }).lean();
  if (!plan) {
    return null;
  }

  return plan;
}

async function getAllPlans() {
  const plans = await PlanModel.find().lean();
  if (!plans || !plans.length) {
    return [];
  }
  return plans;
}
