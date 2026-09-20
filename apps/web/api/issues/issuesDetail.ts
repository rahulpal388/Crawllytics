import { issuesInfoTempData } from "@repo/contracts/constant/responseConstant/issues/issuesInfoTempData";
import { IssuesInfoResponseType } from "@repo/contracts/types/apiResponseType/issuesTypes";

export async function getIssuesDetail(
  id: string,
): Promise<IssuesInfoResponseType | null> {
  // const response = await apiClient.get(`/issues/${id}`);
  const response = issuesInfoTempData.filter((issues) => issues.id === id)[0];
  return response ? response : null;
}
