import { queryOptions } from "@tanstack/react-query";
import { getPageOverview } from "../api/pages/getPageOverview.api";
import { useSelectedProjectId } from "../store/useSelectedProjectId";
import { useDrawerStore } from "../store/drawerStore";

export const PageQueries = {
  getOverview: () => {
    const projectId = useSelectedProjectId((s) => s.projectId);
    const drawer = useDrawerStore((s) => s.drawers).at(1);
    const currentDrawer = drawer?.type === "view-pages" ? drawer : undefined;
    const pageId = currentDrawer?.param.viewPagesId;

    return queryOptions({
      queryKey: ["page-overview", projectId, pageId],
      queryFn: () => getPageOverview(projectId!, pageId!),
      enabled: !!projectId && !!pageId,
    });
  },
};
