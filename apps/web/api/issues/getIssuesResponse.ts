import { IssuesResponseType } from "@repo/contracts/apiContracts/apiResponse/issuesTypes";

export async function getIssuesResponse(
  projectId: string,
): Promise<IssuesResponseType[]> {
  // call the API endpooint
  console.log("Fetching issues for projectId:", projectId);

  return [];
}
