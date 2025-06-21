"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "./navigation/Navigation";
import { adminNavItems } from "@/constants/nav";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeHover] = useState<string | null>(null);

  return (
    <aside
      className={`fixed mt-16 lg:mt-0 top-0 left-0 h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 transition-all duration-300 ease-in-out z-50 border-r border-gray-200/60 shadow-sm ${
        collapsed ? "w-20 px-3" : "w-64 px-5"
      }`}
    >
      {/* Logo & Collapse Button */}
      <div className={`py-6 flex ${collapsed ? "justify-center" : "justify-between items-center"}`}>
        {!collapsed && (
          <Link href="/dashboard" className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
              priority
              className="rounded-lg"
            />
          </Link>
        )}
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
            collapsed ? "mx-auto" : ""
          }`}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <FiChevronRight className="text-gray-500" />
          ) : (
            <FiChevronLeft className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col h-[calc(100%-7rem)] overflow-y-auto custom-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-1">
            <div>
              {!collapsed && (
                <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-400/90 flex justify-start">
                  Menu
                </h2>
              )}
              <Navigation 
                items={adminNavItems} 
                menuType="main" 
                // collapsed={collapsed}
                // onItemHover={setActiveHover}
              />
            </div>
          </div>
        </nav>
      </div>

      {/* User Profile (Bottom) */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200/60 bg-white/50 backdrop-blur-sm ${
        collapsed ? "flex justify-center" : "flex items-center gap-3"
      }`}>
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium">
          U
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="font-medium text-sm truncate">User Name</p>
            <p className="text-xs text-gray-500 truncate">admin@example.com</p>
          </div>
        )}
      </div>

      {/* Active item indicator (floating) */}
      {activeHover && !collapsed && (
        <div 
          className="absolute right-0 w-1 h-8 bg-indigo-500 rounded-l-full transition-all duration-200"
          style={{
            top: `calc(${activeHover}px + 0.5rem)`
          }}
        />
      )}
    </aside>
  );
};

export default AppSidebar;