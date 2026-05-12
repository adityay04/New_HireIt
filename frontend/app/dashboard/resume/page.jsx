"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import ModernTemplate from "@/components/templates/ModernTemplate";
import MinimalTemplate from "@/components/templates/MinimalTemplate";
import CorporateTemplate from "@/components/templates/CorporateTemplate";

export default function ResumePage() {
  const [resume, setResume] = useState({
    title: "",
    bio: "",
    skills: "",
    experience: "",
    education: "",
  });

  const [savedResumes, setSavedResumes] = useState([]);

  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const [editingId, setEditingId] = useState(null);

  const [loadingSkills, setLoadingSkills] = useState(false);

  const fetchResumes = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/resume`,
      );

      setSavedResumes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const saveResume = async () => {
    try {
      if (editingId) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/api/resume/${editingId}`,
          {
            ...resume,
            template: selectedTemplate,
          },
        );

        alert("Resume Updated");
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/resume`, {
          ...resume,
          template: selectedTemplate,
        });

        alert("Resume Saved");
      }

      setResume({
        title: "",
        bio: "",
        skills: "",
        experience: "",
        education: "",
      });

      setEditingId(null);

      fetchResumes();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteResume = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/resume/${id}`);

      fetchResumes();
    } catch (error) {
      console.log(error);
    }
  };

  const editResume = (resumeData) => {
    setResume({
      title: resumeData.title || "",
      bio: resumeData.bio || "",
      skills: resumeData.skills || "",
      experience: resumeData.experience || "",
      education: resumeData.education || "",
    });

    setSelectedTemplate(resumeData.template || "modern");

    setEditingId(resumeData._id);
  };

  const shareResume = (id) => {
    const link = `http://localhost:3000/resume/${id}`;

    navigator.clipboard.writeText(link);

    alert("Resume link copied!");
  };

  const generateAISkills = async () => {
    try {
      setLoadingSkills(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ai/skills`,
        {
          role: resume.skills,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setResume({
        ...resume,
        skills: response.data.response,
      });
    } catch (error) {
      console.log(error);

      alert("Failed to generate skills");
    } finally {
      setLoadingSkills(false);
    }
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-5xl font-bold mb-10">Resume Builder</h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT SIDE */}

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Resume Title"
            value={resume.title}
            onChange={(e) =>
              setResume({
                ...resume,
                title: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none"
          />

          <textarea
            placeholder="Bio"
            value={resume.bio}
            onChange={(e) =>
              setResume({
                ...resume,
                bio: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none min-h-[120px]"
          />

          {/* SKILLS */}

          <div className="space-y-3">
            <textarea
              placeholder="Skills"
              value={resume.skills}
              onChange={(e) =>
                setResume({
                  ...resume,
                  skills: e.target.value,
                })
              }
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none min-h-[120px]"
            />

            <button
              onClick={generateAISkills}
              disabled={loadingSkills}
              className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              {loadingSkills ? "Generating..." : "Generate AI Skills"}
            </button>
          </div>

          <textarea
            placeholder="Experience"
            value={resume.experience}
            onChange={(e) =>
              setResume({
                ...resume,
                experience: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none min-h-[120px]"
          />

          <textarea
            placeholder="Education"
            value={resume.education}
            onChange={(e) =>
              setResume({
                ...resume,
                education: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none min-h-[120px]"
          />

          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none"
          >
            <option value="modern">Modern</option>

            <option value="minimal">Minimal</option>

            <option value="corporate">Corporate</option>
          </select>

          <button
            onClick={saveResume}
            className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition"
          >
            {editingId ? "Update Resume" : "Save Resume"}
          </button>
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-8">
          {/* TEMPLATE PREVIEW */}

          <div>
            {selectedTemplate === "modern" && (
              <ModernTemplate resume={resume} />
            )}

            {selectedTemplate === "minimal" && (
              <MinimalTemplate resume={resume} />
            )}

            {selectedTemplate === "corporate" && (
              <CorporateTemplate resume={resume} />
            )}
          </div>

          {/* SAVED RESUMES */}

          <div>
            <h2 className="text-3xl font-bold mb-6">Saved Resumes</h2>

            <div className="space-y-4">
              {savedResumes.map((item) => (
                <div
                  key={item._id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>

                    <p className="text-zinc-400">Template: {item.template}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => editResume(item)}
                      className="bg-blue-600 px-5 py-2 rounded-xl"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => shareResume(item._id)}
                      className="bg-green-600 px-5 py-2 rounded-xl"
                    >
                      Share
                    </button>

                    <button
                      onClick={() => deleteResume(item._id)}
                      className="bg-red-600 px-5 py-2 rounded-xl"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
