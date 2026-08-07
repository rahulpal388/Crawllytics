import { useSelectedProjectId } from "../store/useSelectedProjectId";


export function getProjectId() {
    return useSelectedProjectId(s => s.projectId);
}