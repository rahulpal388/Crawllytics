'use client';
import { useQuery } from "@tanstack/react-query";
import { getProjectKPIMatrix } from "../api/dashboard.api";
import { getProjectId } from "../lib/getProjectId";


export function useKPIMatrix() {
    const projectId = getProjectId();
    return useQuery({
        queryKey: ["kpi-matrix", projectId],
        queryFn: () => getProjectKPIMatrix(projectId || ""),
        enabled: !!projectId,
    });
}