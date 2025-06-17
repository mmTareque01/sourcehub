"use client";
// import { supabase } from "@/backend/connection";
import PageMeta from "@/components/PageMeta";
// import { useRouter } from "next/navigation";
// import DemographicCard from "@/components/dashboard/DemographicCard";
// import EcommerceMetrics from "@/components/dashboard/EcommerceMetrics";
// import MonthlySalesChart from "@/components/dashboard/MonthlySalesChart";
// import MonthlyTarget from "@/components/dashboard/MonthlyTarget";
// import RecentOrders from "@/components/dashboard/RecentOrders";
// import StatisticsChart from "@/components/dashboard/StatisticsChart";
import React from "react";

export default function Dashboard() {
  // const router = useRouter()
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const checkSession = async () => {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession()

  //     if (!session) {
  //       router.replace('/login')
  //     } else {
  //       setLoading(false)
  //     }
  //   }

  //   checkSession()
  // }, [])

  // if (loading) return <div>Loading...</div>

  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          {/* <EcommerceMetrics /> */}

          {/* <MonthlySalesChart /> */}
        </div>

        <div className="col-span-12 xl:col-span-5">
          {/* <MonthlyTarget /> */}
        </div>

        <div className="col-span-12">
          {/* <StatisticsChart /> */}
        </div>

        <div className="col-span-12 xl:col-span-5">
          {/* <DemographicCard /> */}
        </div>

        <div className="col-span-12 xl:col-span-7">
          {/* <RecentOrders /> */}
        </div>
      </div>
    </>
  );
}
