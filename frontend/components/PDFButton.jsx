"use client";

import html2pdf from "html2pdf.js";

export default function PDFButton() {
  const downloadPDF = () => {
    const element =
      document.getElementById(
        "resume-preview"
      );

    if (!element) {
      alert("Resume preview not found");
      return;
    }

    const options = {
      margin: 0.5,
      filename: "HireIt-Resume.pdf",

      image: {
        type: "jpeg",
        quality: 1,
      },

      html2canvas: {
        scale: 2,
      },

      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf()
      .set(options)
      .from(element)
      .save();
  };

  return (
    <button
      onClick={downloadPDF}
      className="
        w-full
        bg-white
        text-black
        py-3
        rounded-xl
        font-semibold
        hover:scale-[1.01]
        transition
      "
    >
      Export Resume PDF
    </button>
  );
}