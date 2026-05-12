export default function ModernTemplate({
  resume,
}) {
  const skills =
    typeof resume?.skills === "string"
      ? resume.skills.split(",")
      : [];

  return (
    <div className="bg-zinc-900 text-white p-10 rounded-2xl">
      <h1 className="text-4xl font-bold">
        {resume?.title}
      </h1>

      <p className="text-zinc-400 mt-2">
        {resume?.bio}
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white text-black px-3 py-1 rounded-full text-sm"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Experience
        </h2>

        <p className="text-zinc-300 whitespace-pre-line">
          {resume?.experience}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Education
        </h2>

        <p className="text-zinc-300 whitespace-pre-line">
          {resume?.education}
        </p>
      </div>
    </div>
  );
}