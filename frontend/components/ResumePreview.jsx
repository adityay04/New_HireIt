export default function ResumePreview({ resume }) {
  const skills =
    typeof resume?.skills === "string"
      ? resume.skills.split(",")
      : Array.isArray(resume?.skills)
      ? resume.skills
      : [];

  return (
    <div
      id="resume-pdf"
      className="bg-white text-black p-10 rounded-xl shadow-lg"
    >
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold">
          {resume?.title || "Your Name"}
        </h1>

        <p className="text-gray-600 mt-2">
          {resume?.bio || "Professional Summary"}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Experience
        </h2>

        <p className="text-gray-700 whitespace-pre-line">
          {resume?.experience ||
            "No experience added"}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">
          Education
        </h2>

        <p className="text-gray-700 whitespace-pre-line">
          {resume?.education ||
            "No education added"}
        </p>
      </div>
    </div>
  );
}