import mongoose from "mongoose";
import { plansRepository } from "@repo/db/repository/billingSection/planRepository"
import { subscriptionRepository } from "@repo/db/repository/billingSection/subscriptionRepository"
import { PaymentProviderType } from "@repo/db/types/billingTypes/subscription.types";


function SubscriptionServices() {
    return {
        async assignFreePlan(userId: mongoose.Types.ObjectId) {

            const freePlan = await plansRepository.getPlanBySlug("free");
            if (!freePlan) {
                throw new Error("Free plan not found");
            }

            await subscriptionRepository.addSubscription({
                userId: userId,
                planId: freePlan._id,
                planSnapshot: {
                    name: freePlan.name,
                    slug: freePlan.slug,
                    pricing: freePlan.pricing,
                    limits: freePlan.limits
                },
                status: "active",
                currentPeriod: {
                    startDate: new Date(),
                    endDate: null
                },
                provider: "none",
                providerCustomerId: null,
                providerSubscriptionId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            })

        },

        async getUserSubscription(userId: mongoose.Types.ObjectId) {
            const subscription = await subscriptionRepository.getSubscriptionByUserId(userId);
            return subscription;
        },

        async changePlan(userId: mongoose.Types.ObjectId, planId: mongoose.Types.ObjectId, provider: PaymentProviderType, providerCustomerId: string, providerSubscriptionId: string) {

            const plan = await plansRepository.getPlanById(planId);
            if (!plan || plan.status !== "active") {
                throw new Error("Plan not found or inactive");
            }

            const subscription = await subscriptionRepository.getActiveByUserId(userId);
            if (!subscription) {
                throw new Error("Active subscription not found");
            }



            if (subscription.planId.toString() === planId.toString()) {
                throw new Error("User is already subscribed to this plan");
            }

            const effectiveDate = new Date();

            await subscriptionRepository.updateById(
                subscription._id,
                {
                    status: "replaced",
                    currentPeriod: {
                        startDate: subscription.currentPeriod.startDate,
                        endDate: effectiveDate,
                    }

                }
            )

            await subscriptionRepository.addSubscription({
                userId: userId,
                planId: plan._id,
                planSnapshot: {
                    name: plan.name,
                    slug: plan.slug,
                    pricing: plan.pricing,
                    limits: plan.limits
                },
                status: "active",
                currentPeriod: {
                    startDate: effectiveDate,
                    endDate: new Date(
                        effectiveDate.getTime() + 30 * 24 * 60 * 60 * 1000
                    )
                },
                provider,
                providerCustomerId,
                providerSubscriptionId,
                createdAt: new Date(),
                updatedAt: new Date()
            })


        }
    }
}



const subscriptionService = SubscriptionServices();
export default subscriptionService;