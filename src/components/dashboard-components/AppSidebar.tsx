"use client";
import Link from "next/link";
import Image from "next/image";
import { useAppSettings } from "@/stores/app-settings-store";
import { HiDotsHorizontal } from "react-icons/hi";
import SidebarWidget from "./SidebarWidget";
import Navigation from "./navigation/Navigation";
import { adminNavItems } from "@/constants/nav";
import { useEffect, useRef } from "react";

const AppSidebar = () => {
  const { expandedSidebar } = useAppSettings();
  const {  setAdminSideBarWidth } = useAppSettings();
  const isMobileOpen = false
  const isHovered = false;



  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // setWidth(entry.contentRect.width);
        setAdminSideBarWidth(`${entry.contentRect.width}px`)
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);




  return (
    <aside
      ref={containerRef}
      className={`flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white 0 text-gray-900  h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
lg:translate-x-0`}
    >

      <div
        className={`py-8 flex ${!expandedSidebar && !isHovered ? "lg:justify-center" : "justify-start"
          }`}
      >
        <Link href="/dashboard">
          {expandedSidebar || isHovered || isMobileOpen ? (
            <>
              <Image
                className=""
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
                height={40}
                priority
              />

            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
              priority
            />
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!expandedSidebar && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
                  }`}
              >
                {expandedSidebar || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HiDotsHorizontal />
                )}
              </h2>
              <Navigation items={adminNavItems} menuType="main" />
            </div>
          </div>
        </nav>
        {expandedSidebar || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
