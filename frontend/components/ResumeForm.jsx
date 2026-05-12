"use client";

import { useState } from "react";

import API from "@/lib/axios";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

export default function ResumeForm({
  resumeData,
  setResumeData,
  handleSubmit,
  editingId,
}) {

  const generateSkills = async () => {
    try {

      const res = await API.post(
        "/ai/skills",
        {
          role: resumeData.title,
        }
      );

      setResumeData({
        ...resumeData,

        skills: res.data.response,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const improveExperience = async () => {
    try {

      const res = await API.post(
        "/ai/experience",
        {
          experience:
            resumeData.experience,
        }
      );

      setResumeData({
        ...resumeData,

        experience:
          res.data.response,
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <Input
        placeholder="Resume Title"
        value={resumeData.title || ""}
        onChange={(e) =>
          setResumeData({
            ...resumeData,
            title: e.target.value,
          })
        }
      />

      <Input
        placeholder="Full Name"
        value={resumeData.name || ""}
        onChange={(e) =>
          setResumeData({
            ...resumeData,
            name: e.target.value,
          })
        }
      />

      <Input
        placeholder="Email"
        value={resumeData.email || ""}
        onChange={(e) =>
          setResumeData({
            ...resumeData,
            email: e.target.value,
          })
        }
      />

      <div>

        <Textarea
          placeholder="Skills"
          value={resumeData.skills || ""}
          onChange={(e) =>
            setResumeData({
              ...resumeData,
              skills: e.target.value,
            })
          }
        />

        <Button
          type="button"
          onClick={generateSkills}
          className="w-full mt-2"
        >
          Generate AI Skills
        </Button>

      </div>

      <div>

        <Textarea
          placeholder="Experience"
          value={
            resumeData.experience || ""
          }
          onChange={(e) =>
            setResumeData({
              ...resumeData,
              experience:
                e.target.value,
            })
          }
        />

        <Button
          type="button"
          onClick={improveExperience}
          className="w-full mt-2"
        >
          Improve Experience
        </Button>

      </div>

      <Textarea
        placeholder="Education"
        value={
          resumeData.education || ""
        }
        onChange={(e) =>
          setResumeData({
            ...resumeData,
            education: e.target.value,
          })
        }
      />

      <Button
        type="submit"
        className="w-full"
      >
        {editingId
          ? "Update Resume"
          : "Save Resume"}
      </Button>

    </form>
  );
}