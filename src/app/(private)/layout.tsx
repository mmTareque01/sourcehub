import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Noto_Sans } from "next/font/google";
import "../../style/dashboard.css";
import AppSidebar from "@/components/dashboard-components/AppSidebar";
import Backdrop from "@/components/dashboard-components/Backdrop";
import AppHeader from "@/components/dashboard-components/AppHeader";
// import { supabase } from "@/backend/connection";
import { redirect } from "next/navigation";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from 'next/headers'
import { createClient } from "@/libs/supabse/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto" });


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Source SaaS",
  description: "Discover Open Source SaaS Projects",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const { data: { session } } = await supabase.auth.getSession()
  // const supabase = createServerComponentClient({ cookies })
  // const { data: { session } } = await supabase.auth.getSession()
  // if (!session) {
  //   redirect('/login')
  // }


  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }


  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${notoSans.variable} antialiased`}
      >
        <div className="min-h-screen xl:flex bg-[#e9eef3] text-gray-800 placeholder:text-gray-600">
          <div>
            <AppSidebar />
            <Backdrop />
          </div>

          <div
            className={`flex-1 lg:ml-[290px] transition-all duration-300 ease-in-out`}
          >
            <AppHeader />
            <div className="p-2 mx-auto max-w-screen-2xl md:p-4 ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
