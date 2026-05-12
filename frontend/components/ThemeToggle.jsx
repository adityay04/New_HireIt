"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] =
    useState(false);

  const [dark, setDark] =
    useState(true);

  useEffect(() => {
    setMounted(true);

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove(
        "dark"
      );

      setDark(false);
    } else {
      document.documentElement.classList.add(
        "dark"
      );

      setDark(true);
    }
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );

      setDark(false);
    } else {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );

      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        px-5 py-3 rounded-2xl
        bg-zinc-900
        border border-zinc-700
        text-white
        font-semibold
      "
    >
      {dark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"}
    </button>
  );
}