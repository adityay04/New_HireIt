"use client";

import API from "@/lib/axios";

import { Trash2, Pencil } from "lucide-react";

export default function ResumeList({
  resumes,
  setResumeData,
  setEditingId,
  fetchResumes,
}) {
  const deleteResume = async (id) => {
    try {
      await API.delete(`/resume/${id}`);

      fetchResumes();
    } catch (error) {
      console.log(error);
    }
  };

  const editResume = (resume) => {
    setResumeData({
      title: resume.title || "",
      name: resume.name || "",
      email: resume.email || "",
      skills: resume.skills || "",
      experience: resume.experience || "",
      education: resume.education || "",
    });

    setEditingId(resume._id);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Resumes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resumes.map((resume) => (
          <div key={resume._id} className="glass rounded-3xl p-5">
            <h2 className="text-xl font-bold">{resume.title}</h2>

            <p className="text-zinc-400 mt-2">{resume.name}</p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => editResume(resume)}
                className="flex-1 bg-white text-black py-2 rounded-xl flex items-center justify-center gap-2"
              >
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => deleteResume(resume._id)}
                className="flex-1 bg-red-500 py-2 rounded-xl flex items-center justify-center gap-2"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
