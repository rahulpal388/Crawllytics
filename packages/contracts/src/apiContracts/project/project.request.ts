import z from "zod"
import { ObjectIdSchema } from "../common/objectId.schema.js"
import { ReportFormat } from "@repo/db/types/report.Types"
import { urlSchema } from "../common/url-schema.js";
import { MAX_CRAWL_DEPTH, MAX_CRAWL_PAGES } from "@repo/db/types/projectType/projectSetting.Types";
import { USER_AGENT } from "@repo/contracts/constant/fetchHeaderConfig";

const projectSettingSchema = z.object({
    sendReport: z.boolean().default(true),
    reportType: z.enum(Object.values(ReportFormat)).default("pdf"),
    robotsTxtUrls: z.string().default("/robots.txt"),
    siteMapUrls: z.array(z.string()).default(["/sitemap.xml"]),
    userAgent: z.string().default(USER_AGENT),
    crawlLimit: z.object({
        type: z.literal("depth"),
        value: z.number().int().min(1).max(MAX_CRAWL_DEPTH)
    }).or(z.object({
        type: z.literal("pages"),
        value: z.number().int().min(10).max(MAX_CRAWL_PAGES)
    })).default({
        type: "pages",
        value: 10
    })
})


export const domainSchema = z
    .string()
    .trim()
    .max(2048, {
        message: "Domain should not exceed 2048 characters",
    })
    .pipe(
        z.url({
            protocol: /^https?$/,
            message: "Invalid http/https domain",
        })
    )
    .superRefine((value, ctx) => {
        const url = new URL(value);

        if (url.pathname !== "/") {
            ctx.addIssue({
                code: "custom",
                message: "Domain URL must not contain a path",
            });
        }

        if (url.search || url.hash) {
            ctx.addIssue({
                code: "custom",
                message: "Domain URL must not contain query parameters or fragments",
            });
        }
    });

export const createProjectSchema = z.object({
    projectName: z
        .string()
        .trim()
        .min(1, { message: "Project name is required" })
        .max(100, { message: "Project name should not exceed 100 characters" }),

    domain: domainSchema,
    projectSetting: projectSettingSchema
}).superRefine((data, ctx) => {
    const projectUrl = new URL(data.domain);

    // path use to tell the zod where the error is coming from, so that it can be displayed in the error message
    const validateUrlOrPath = (value: string, path: (string | number)[]) => {

        // allow path
        if (value.startsWith("/")) {
            return;
        }

        // if not path, then it should be a valid url
        let url: URL;
        try {
            url = new URL(value);
        } catch {
            ctx.addIssue(
                {
                    code: "custom",
                    message: "Must be a valid URL or path",
                    path,
                }
            )

            return;
        }

        // if it is a valid url, then check if the domain is same as the project domain
        if (url.hostname !== projectUrl.hostname) {
            ctx.addIssue(
                {
                    code: "custom",
                    message: "URL must be of the same domain as the project domain",
                    path,
                }
            )
        }

    }


    // validate the robots.txt URL
    validateUrlOrPath(data.projectSetting.robotsTxtUrls, ["projectSetting", "robotsTxtUrl"]);

    data.projectSetting.siteMapUrls.forEach((url, index) => {
        validateUrlOrPath(
            url,
            ["projectSetting", "siteMapUrls", index]
        );
    });
})





export const deleteProjectSchema = z.object({
    projectId: ObjectIdSchema
});


export type CreateProjectRequestType = z.infer<typeof createProjectSchema>;
export type DeleteProjectRequestType = z.infer<typeof deleteProjectSchema>;