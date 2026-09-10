import { ProjectSettingSchemaType } from "@repo/db/types/projectType/projectSetting.Types";
import { USER_AGENT } from "@repo/contracts/constant/fetchHeaderConfig"



export const DEFAULT_PROJECT_SETTING: Omit<ProjectSettingSchemaType, "projectId"> = {
    sendReport: true,
    reportType: "pdf",
    robotsTxtUrls: "/robots.txt",
    siteMapUrls: ["/sitemap.xml"],
    userAgent: USER_AGENT,
    crawlLimit: {
        type: "depth",
        value: 1
    }
}