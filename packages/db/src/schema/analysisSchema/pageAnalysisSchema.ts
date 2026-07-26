import mongoose from "mongoose";
import { PageAnalysisType } from "../../types/pageAnalysisType.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import { evaluateSchema } from "./evaluateSchema.js";



const pageAnalysisSchemaDefinition: SchemaOf<PageAnalysisType> = {
    Crawlability: { type: [evaluateSchema], default: [] },
    Indexability: { type: [evaluateSchema], default: [] },
    Metadata: { type: [evaluateSchema], default: [] },
    URL: { type: [evaluateSchema], default: [] },
    Content: { type: [evaluateSchema], default: [] },
    Heading: { type: [evaluateSchema], default: [] },
    Images: { type: [evaluateSchema], default: [] },
    Links: { type: [evaluateSchema], default: [] },
    StructuredData: { type: [evaluateSchema], default: [] },
    Performance: { type: [evaluateSchema], default: [] },
    Security: { type: [evaluateSchema], default: [] },
    Mobile: { type: [evaluateSchema], default: [] },
    Accessibility: { type: [evaluateSchema], default: [] },
    Social: { type: [evaluateSchema], default: [] },
    HTMLQuality: { type: [evaluateSchema], default: [] }

}



export const pageAnalysisSchema = new mongoose.Schema(pageAnalysisSchemaDefinition, { _id: false, timestamps: false, versionKey: false, strict: true });