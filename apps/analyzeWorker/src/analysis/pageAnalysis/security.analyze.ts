import { GatherInfoType } from "@/types/gatherInfoType.js";
import { PageSecurityAnalysis } from "@repo/config/types/analysesTypes/perPages/pageSecurity";

export function securityAnalysis(gatherInfo: GatherInfoType): PageSecurityAnalysis {
  const httpsEnabled = gatherInfo.networkInfo.protocol === "https";
  const hstsEnabled = gatherInfo.networkInfo.responseHeaders.hsts !== null;
  const cspPresent = gatherInfo.networkInfo.responseHeaders.csp !== null;
  const xFrameOptionsPresent = gatherInfo.networkInfo.responseHeaders.xFrameOptions !== null;
  const xContentTypeOptionsPresent =
    gatherInfo.networkInfo.responseHeaders.xContentTypeOptions !== null;
  const referrerPolicyPresent = gatherInfo.networkInfo.responseHeaders.referrerPolicy !== null;
  const permissionsPolicyPresent =
    gatherInfo.networkInfo.responseHeaders.permissionsPolicy !== null;

  return {
    httpsEnabled,
    hstsEnabled,
    cspPresent,
    xFrameOptionsPresent,
    xContentTypeOptionsPresent,
    referrerPolicyPresent,
    permissionsPolicyPresent,
  };
}
