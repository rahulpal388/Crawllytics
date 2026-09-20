import { PageSidebarItemsType } from "../../store/pageSidebarStore";
import { Contents } from "./contents";
import { DesktopPageTest } from "./desktopPageTest";
import { ExternalLinks } from "./externalLinks";
import { HTMLSource } from "./htmlSource";
import { Images } from "./images";
import { InternalBacklinks } from "./internalBacklinks";
import { InternalLinks } from "./internalLink";
import { Issues } from "./issues/issues";
import { MobilePageTest } from "./mobilePageTest";
import { Overview } from "./overview/overview";
import { PageContents } from "./pageContents";
import { PageCSS } from "./pageCss";
import { PageJavascript } from "./pageJavascript";
import { PageMonitoring } from "./pageMonitoring";
import { StructuredData } from "./structuredData";

export const PageContentsRepository: Record<
  PageSidebarItemsType,
  React.ComponentType
> = {
  overview: Overview,
  issues: Issues,
  content: Contents,
  "structured-data": StructuredData,
  "page-monitoring": PageMonitoring,
  "internal-backlinks": InternalBacklinks,
  "internal-links": InternalLinks,
  "external-links": ExternalLinks,
  "mobile-page-test": MobilePageTest,
  "desktop-page-test": DesktopPageTest,
  images: Images,
  css: PageCSS,
  js: PageJavascript,
  "html-source": HTMLSource,
};
