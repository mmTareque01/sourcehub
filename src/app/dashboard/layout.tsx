
import AppHeader from "@/components/dashboard-components/AppHeader";
import AppSidebar from "@/components/dashboard-components/AppSidebar";
import Backdrop from "@/components/dashboard-components/Backdrop";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export default async function DashboardLayout({
  // Mark as async
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("refreshToken")?.value; // Add await

  if (!token) {
    // redirect("/signin");
  }

  return (
    <div className="min-h-screen xl:flex bg-[#F9FAFB] text-gray-800 placeholder:text-gray-600">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>

      <div
        className={`flex-1 lg:ml-[290px] transition-all duration-300 ease-in-out`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-screen-2xl md:p-6 bg-[#F9FAFB]">
          {children}
        </div>
      </div>
    </div>
  );
}
