import SubscriptionModel from "../../model/billingDomainModel/subscription.model.js";
import { SubscriptionSchemaType } from "../../types/billingTypes/subscription.types.js";
import mongoose from "mongoose";

export const subscriptionRepository = {
    addSubscription,
    getSubscriptionByUserId,
    getActiveByUserId,
    updateById
}



async function addSubscription(subscription: SubscriptionSchemaType) {
    return SubscriptionModel.create(subscription);
}

async function getSubscriptionByUserId(userId: mongoose.Types.ObjectId) {

    const subscription = await SubscriptionModel.findOne({ userId: userId }).lean();

    if (!subscription) {
        return null;
    }
    return subscription;
}


async function getActiveByUserId(userID: mongoose.Types.ObjectId) {
    return SubscriptionModel.findOne({ userId: userID, status: "active" }).lean();

}


async function updateById(subscriptionId: mongoose.Types.ObjectId, changes: Partial<SubscriptionSchemaType>) {
    return SubscriptionModel.findByIdAndUpdate(subscriptionId, changes, { new: true }).lean();
}