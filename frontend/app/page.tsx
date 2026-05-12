import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main>

      <Navbar />

      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">

        <div className="glass px-6 py-2 rounded-full mb-6">

          <p className="text-sm text-zinc-300">
            AI-Powered Resume Platform
          </p>

        </div>

        <h1 className="text-6xl md:text-7xl font-bold max-w-4xl leading-tight">

          Build Professional
          <span className="gradient-text">
            {" "}AI Resumes
          </span>
          {" "}That Get Hired

        </h1>

        <p className="text-zinc-400 text-lg mt-6 max-w-2xl">

          Create ATS-optimized resumes,
          AI-generated portfolio content,
          and match jobs instantly with HireIt.

        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-white text-black px-7 py-3 rounded-2xl font-medium hover:scale-105 transition">

            Get Started

          </button>

          <button className="border border-zinc-700 px-7 py-3 rounded-2xl hover:bg-zinc-900 transition">

            Learn More

          </button>

        </div>

      </section>

    </main>
  );
}