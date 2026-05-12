"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}) {
  const router = useRouter();

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}