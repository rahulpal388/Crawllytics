import { NavBar } from "../../components/dashboard/navBar";
import { SideBar } from "../../components/dashboard/sideBar/sideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-screen w-screen">
        <NavBar />
        <div className="flex h-[calc(100vh-3.5rem)] w-full">
          <div className="hidden h-full w-auto md:flex">
            <SideBar />
          </div>
          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    </>
  );
}
