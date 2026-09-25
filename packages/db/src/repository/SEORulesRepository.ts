
import { SEORules } from "@repo/contracts/types/analysesTypes/SEORules.Type"
import SEORulesModel from "../model/seoRules/SEORules.model.js"


export const SEORulesRepository = {
    getSEORulesById,
    bulkInsert
}


async function getSEORulesById(ruleId: string) {
    return SEORulesModel.findOne({ ruleId })
}


async function bulkInsert(rules: SEORules<string>[]) {
    const operations = rules.map((rule) => {
        return {
            updateOne: {
                filter: { ruleId: rule.ruleId },
                update: {
                    $set: rule
                },
                upsert: true
            }
        }
    })
    return SEORulesModel.bulkWrite(operations)
}