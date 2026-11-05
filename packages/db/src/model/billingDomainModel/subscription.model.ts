import { model } from "mongoose";
import SubscriptionSchema from "../../schema/billingDomain/subscription.schema.js";

const SubscriptionModel = model("Subscriptions", SubscriptionSchema);

export default SubscriptionModel;
