import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUser } from "../../api/server/getUser";
import { NavBar } from "../../components/dashboard/navBar";
import { SideBar } from "../../components/dashboard/sideBar/sideBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  const queryClient = new QueryClient();

  queryClient.setQueryData(["auth", "user"], user);

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="h-screen w-screen">
          <NavBar />
          <div className="flex h-[calc(100vh-3.5rem)] w-full">
            <div className="hidden h-full w-auto md:flex">
              <SideBar />
            </div>
            <div className="flex-1 overflow-hidden">{children}</div>
          </div>
        </div>
      </HydrationBoundary>
    </>
  );
}
