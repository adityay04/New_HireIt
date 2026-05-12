"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";

export default function DashboardPage() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/resume`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setResumes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const latestResume = resumes.length > 0 ? resumes[0] : null;

  return (
    <div className="min-h-screen bg-background text-foreground p-5 md:p-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome back,
            <span className="text-zinc-500"> User</span>
          </h1>

          <p className="text-muted-foreground mt-3 text-base md:text-lg">
            Manage resumes and AI career tools.
          </p>
        </div>

        <ThemeToggle />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
          <p className="text-muted-foreground text-lg">Total Resumes</p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            {resumes.length}
          </h2>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
          <p className="text-muted-foreground text-lg">Latest Template</p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 capitalize">
            {latestResume?.template || "None"}
          </h2>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
          <p className="text-muted-foreground text-lg">Last Resume</p>

          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            {latestResume?.title || "No resumes"}
          </h2>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* RECENT RESUMES */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Resumes</h2>

            <Link
              href="/dashboard/resume"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {resumes.length === 0 && (
              <p className="text-muted-foreground">No resumes created yet.</p>
            )}

            {resumes.map((resume) => (
              <div
                key={resume._id}
                className="bg-black/40 border border-border rounded-2xl p-5"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {resume.title}
                </h3>

                <p className="text-muted-foreground mt-1 capitalize">
                  {resume.template} template
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Quick Actions</h2>

          <div className="space-y-4">
            <Link
              href="/dashboard/resume"
              className="
                block w-full
                bg-white text-black
                text-center
                py-4
                rounded-2xl
                font-semibold
                hover:opacity-90
              "
            >
              Create Resume
            </Link>

            <Link
              href="/dashboard/ai-tools"
              className="
                block w-full
                bg-zinc-900
                border border-zinc-700
                text-white
                text-center
                py-4
                rounded-2xl
                font-semibold
              "
            >
              Open AI Tools
            </Link>

            <Link
              href="/dashboard/portfolio"
              className="
                block w-full
                bg-zinc-900
                border border-zinc-700
                text-white
                text-center
                py-4
                rounded-2xl
                font-semibold
              "
            >
              Build Portfolio
            </Link>
          </div>

          {/* AI BOX */}
          <div className="mt-10 bg-black/40 border border-border rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-2">HireIt AI</h3>

            <p className="text-muted-foreground leading-relaxed">
              Improve resumes, optimize ATS scores, generate skills, enhance
              portfolio content and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
