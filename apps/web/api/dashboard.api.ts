import { apiClient } from "./apiClient";
import { DashboardKPIsResponse } from "@repo/contracts/apiContracts/apiResponse/dashboard.responseType";

export async function getProjectKPIMatrix(
  projectId: string,
): Promise<DashboardKPIsResponse> {
  const response = await apiClient.get<DashboardKPIsResponse>(
    `/projects/:${projectId}/kpi-matrix`,
  );
  return response.data;
}
