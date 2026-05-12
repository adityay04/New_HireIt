"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Sparkles,
  User,
  LogOut,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Resume Builder",
    href: "/dashboard/resume",
    icon: FileText,
  },

  {
    name: "AI Tools",
    href: "/dashboard/ai",
    icon: Sparkles,
  },

  {
    name: "Portfolio",
    href: "/dashboard/portfolio",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <aside className="w-72 min-h-screen border-r border-zinc-800 bg-zinc-950/60 backdrop-blur-xl">

      <div className="p-6 border-b border-zinc-800">

        <h1 className="text-3xl font-bold gradient-text">
          HireIt
        </h1>

      </div>

      <nav className="p-4 space-y-2">

        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                active
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >

              <Icon size={20} />

              {link.name}

            </Link>
          );
        })}

      </nav>

      <div className="absolute bottom-6 left-4 right-4">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 transition py-3 rounded-2xl"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}