import { DrawerType } from "../../store/drawerStore";
import { FixIssueDrawer } from "./issues/fixIssueDrawer";
import { ViewIssuesDrawer } from "./pages/viewIssuesDrawer";
import { ViewPagesDrawer } from "./pages/viewPagesDrawer";

export const DrawerRegistery: Record<DrawerType, React.ComponentType> = {
  "view-issues": ViewIssuesDrawer,
  "view-pages": ViewPagesDrawer,
  "fix-issues": FixIssueDrawer,
};
