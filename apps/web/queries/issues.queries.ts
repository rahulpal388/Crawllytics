import { queryOptions } from "@tanstack/react-query";
import { getIssuesDetail } from "../api/issues/issuesDetail";
import { useSelectedProjectId } from "../store/useSelectedProjectId";

export const IssuesQueries = {
  getIssues: () => {
    const projectId = useSelectedProjectId((s) => s.projectId);
    return queryOptions({
      queryKey: ["issues", projectId],
      queryFn: () => getIssuesDetail(projectId!),
      enabled: !!projectId,
    });
  },
  getIssuesInfo: (issueId: string | undefined) => {
    return queryOptions({
      queryKey: ["issues-info", issueId],
      queryFn: () => getIssuesDetail(issueId!),
      enabled: !!issueId,
    });
  },
};
