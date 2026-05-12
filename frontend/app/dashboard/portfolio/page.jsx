"use client";

import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "HireIt",
      description:
        "AI-powered resume builder with portfolio generation, ATS optimization, resume sharing, and AI tools.",
      tech: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Groq AI",
      ],
      github:
        "https://github.com/adityay04",
    },

    {
      title:
        "AI Resume Analyzer",
      description:
        "Compares resumes with job descriptions and provides ATS suggestions using AI.",
      tech: [
        "React",
        "Express",
        "Groq",
        "MongoDB",
      ],
      github:
        "https://github.com/adityay04",
    },

    {
      title:
        "Data Analytics Dashboard",
      description:
        "Interactive analytics dashboard with charts, KPIs, and dataset insights.",
      tech: [
        "Python",
        "Pandas",
        "Power BI",
        "SQL",
      ],
      github:
        "https://github.com/adityay04",
    },

    {
      title:
        "Portfolio Website",
      description:
        "Modern animated developer portfolio showcasing projects and skills.",
      tech: [
        "Next.js",
        "Tailwind",
        "Framer Motion",
      ],
      github:
        "https://github.com/adityay04",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Python",
    "SQL",
    "Pandas",
    "Machine Learning",
    "AI Integration",
    "Git",
    "REST APIs",
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <div className="mb-20">
          <h1 className="text-6xl font-bold mb-6">
            Aditya Yadav
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
            Full Stack Developer &
            Data Analytics Enthusiast
            building AI-powered web
            applications, dashboards,
            and scalable digital
            experiences.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="https://github.com/adityay04"
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/aditya-yadav2005/"
              target="_blank"
              className="border border-zinc-700 px-6 py-3 rounded-xl"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* ABOUT */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-zinc-400 leading-8 text-lg">
            I’m a Computer Science
            student passionate about
            Full Stack Development,
            Artificial Intelligence,
            and Data Analytics.
            I enjoy building modern
            SaaS applications,
            AI-integrated tools,
            dashboards, and impactful
            developer products.
          </p>
        </div>

        {/* SKILLS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map(
              (skill, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-xl"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(
              (project, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-7 mb-6">
                    {
                      project.description
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(
                      (
                        tech,
                        techIndex
                      ) => (
                        <span
                          key={
                            techIndex
                          }
                          className="bg-black border border-zinc-700 px-3 py-1 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <Link
                    href={
                      project.github
                    }
                    target="_blank"
                    className="text-blue-400"
                  >
                    View Project →
                  </Link>
                </div>
              )
            )}
          </div>
        </div>

        {/* GITHUB */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            GitHub & Links
          </h2>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
            <p className="text-zinc-400 mb-6">
              Explore my projects,
              repositories, and coding
              journey.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="https://github.com/adityay04"
                target="_blank"
                className="text-blue-400"
              >
                GitHub Profile
              </Link>

              <Link
                href="https://www.linkedin.com/in/aditya-yadav2005/"
                target="_blank"
                className="text-blue-400"
              >
                LinkedIn Profile
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-zinc-800 pt-8 text-zinc-500">
          Built with Next.js,
          Tailwind CSS, and AI.
        </div>
      </div>
    </div>
  );
}