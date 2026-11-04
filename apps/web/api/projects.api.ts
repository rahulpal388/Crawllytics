import { apiClient } from "./apiClient";
import type { CreateProjectRequestType } from "@repo/contracts/apiContracts/project/project.request";

type CreateProjectResponse = {
  message: string;
  projectId: string;
};

export async function createProject(
  payload: CreateProjectRequestType,
): Promise<CreateProjectResponse> {
  const response = await apiClient.post<CreateProjectResponse>("/project/create", payload);
  return response.data;
}

export async function deleteProject(projectId: string): Promise<void> {
  await apiClient.request({
    method: "DELETE",
    url: "/project/delete",
    data: { projectId },
  });
}
