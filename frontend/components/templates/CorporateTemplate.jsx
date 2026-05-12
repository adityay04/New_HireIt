export default function CorporateTemplate({
  resume,
}) {
  const skills =
    typeof resume?.skills === "string"
      ? resume.skills.split(",")
      : [];

  return (
    <div className="bg-blue-950 text-white p-10 rounded-2xl">
      <div className="border-b border-blue-700 pb-4">
        <h1 className="text-4xl font-bold">
          {resume?.title}
        </h1>

        <p className="text-blue-200 mt-2">
          {resume?.bio}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-300">
          Skills
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-800 p-2 rounded-lg"
            >
              {skill.trim()}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-300">
          Experience
        </h2>

        <p className="mt-4 whitespace-pre-line text-blue-100">
          {resume?.experience}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-300">
          Education
        </h2>

        <p className="mt-4 whitespace-pre-line text-blue-100">
          {resume?.education}
        </p>
      </div>
    </div>
  );
}