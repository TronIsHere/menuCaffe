"use client";

import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen dark" dir="rtl">
      <Sidebar />
      <main className="flex-[8] min-h-[300px] bg-darkPrimary w-full md:w-auto">
        <div className="bg-darkSecondary min-h-[73px] border-r border-b flex items-center justify-end px-7 dark:text-white">
          <div className="flex gap-3 items-center">
            <div className="flex-col">
              <span className="font-iran-sans-regular text-sm">پلوتو</span>
            </div>
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="p-4 px-6">{children}</div>
      </main>
    </div>
  );
}
