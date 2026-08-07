import { apiClient } from "./apiClient";
import { DashboardKPIsResponse } from "@repo/config/types/apiResponseType/dashboard.responseType";

export async function getProjectKPIMatrix(projectId: string): Promise<DashboardKPIsResponse> {
    return apiClient.get(`/projects/:${projectId}/kpi-matrix`);
}