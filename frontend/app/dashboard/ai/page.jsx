"use client";

import { useState } from "react";

import axios from "axios";

export default function AIToolsPage() {
  // ATS

  const [resumeSkills, setResumeSkills] = useState("");

  const [jobDescription, setJobDescription] = useState("");

  const [atsResult, setAtsResult] = useState("");

  // BIO

  const [name, setName] = useState("");

  const [role, setRole] = useState("");

  const [skills, setSkills] = useState("");

  const [bioResult, setBioResult] = useState("");

  // EXPERIENCE

  const [experience, setExperience] = useState("");

  const [experienceResult, setExperienceResult] = useState("");

  // EDUCATION

  const [education, setEducation] = useState("");

  const [educationResult, setEducationResult] = useState("");

  // TOKEN

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // ATS MATCH

  const checkATS = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ai/match`,
        {
          resumeSkills,
          jobDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setAtsResult(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  // BIO

  const generateBio = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ai/bio`,
        {
          name,
          role,
          skills,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setBioResult(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  // EXPERIENCE

  const improveExperience = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ai/experience`,
        {
          experience,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setExperienceResult(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  // EDUCATION

  const improveEducation = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ai/education`,
        {
          education,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setEducationResult(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-10">AI Tools</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* ATS */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">ATS Score Checker</h2>

          <textarea
            placeholder="Resume Skills"
            value={resumeSkills}
            onChange={(e) => setResumeSkills(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4 min-h-[120px]"
          />

          <textarea
            placeholder="Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4 min-h-[120px]"
          />

          <button
            onClick={checkATS}
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            Check ATS Match
          </button>

          {atsResult && (
            <div className="mt-5 bg-black p-4 rounded-xl whitespace-pre-line">
              {atsResult}
            </div>
          )}
        </div>

        {/* BIO */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">AI Bio Generator</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4"
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4"
          />

          <textarea
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4 min-h-[120px]"
          />

          <button
            onClick={generateBio}
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            Generate Bio
          </button>

          {bioResult && (
            <div className="mt-5 bg-black p-4 rounded-xl whitespace-pre-line">
              {bioResult}
            </div>
          )}
        </div>

        {/* EXPERIENCE */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Experience Improver</h2>

          <textarea
            placeholder="Write experience..."
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4 min-h-[160px]"
          />

          <button
            onClick={improveExperience}
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            Improve Experience
          </button>

          {experienceResult && (
            <div className="mt-5 bg-black p-4 rounded-xl whitespace-pre-line">
              {experienceResult}
            </div>
          )}
        </div>

        {/* EDUCATION */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Education Improver</h2>

          <textarea
            placeholder="Write education..."
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4 min-h-[160px]"
          />

          <button
            onClick={improveEducation}
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            Improve Education
          </button>

          {educationResult && (
            <div className="mt-5 bg-black p-4 rounded-xl whitespace-pre-line">
              {educationResult}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
