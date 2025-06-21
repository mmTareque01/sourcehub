"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { supabase } from "@/backend/connection";

const AppHeader = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="shadow-xl sticky top-0 flex w-full border-b border-gray-200 !bg-white dark:border-gray-800 dark:bg-gray-900 !text-black">
      <div className="flex w-full flex-col items-center justify-between lg:flex-row lg:px-6">
        <div className="flex w-full items-center justify-between gap-2 border-b border-gray-200 px-3 py-3  sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">

          {/* left */}

          <p className="text-4xl font-bold text-center w-full">
            Welcome to Admin Panel
          </p>

        </div>


        <div
          className={`${isApplicationMenuOpen ? "flex" : "hidden"
            } w-full items-center justify-between gap-4 px-5 py-4 shadow-md lg:flex lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-2 2xsm:gap-3">
            {/* <ThemeToggleButton /> */}
            {/* Right Side Menu */}
            <Button
              // href={'/'}
              onClick={async () => {
                console.log('cliekded')
                await supabase.auth.signOut();
                // router.push('/login')
                // router.refresh();
              }}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6b78f0]  text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Log out</span>
            </Button>

            {/* <NotificationDropdown /> */}
          </div>
          {/* <UserDropdown /> */}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
