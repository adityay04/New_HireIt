"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import ModernTemplate from "@/components/templates/ModernTemplate";

import MinimalTemplate from "@/components/templates/MinimalTemplate";

import CorporateTemplate from "@/components/templates/CorporateTemplate";

export default function PublicResumePage({ params }) {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/resume/public/${params.id}`,
      );

      setResume(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!resume) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black p-10">
      {resume.template === "modern" && <ModernTemplate resume={resume} />}

      {resume.template === "minimal" && <MinimalTemplate resume={resume} />}

      {resume.template === "corporate" && <CorporateTemplate resume={resume} />}
    </div>
  );
}
