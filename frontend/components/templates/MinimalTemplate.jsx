export default function MinimalTemplate({
  resume,
}) {
  const skills =
    typeof resume?.skills === "string"
      ? resume.skills.split(",")
      : [];

  return (
    <div className="bg-white text-black p-10 rounded-2xl">
      <h1 className="text-5xl font-light">
        {resume?.title}
      </h1>

      <p className="text-gray-600 mt-3">
        {resume?.bio}
      </p>

      <div className="mt-10">
        <h2 className="text-xl font-semibold border-b pb-2">
          Skills
        </h2>

        <ul className="mt-4 space-y-2">
          {skills.map((skill, index) => (
            <li key={index}>
              • {skill.trim()}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold border-b pb-2">
          Experience
        </h2>

        <p className="mt-4 whitespace-pre-line">
          {resume?.experience}
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold border-b pb-2">
          Education
        </h2>

        <p className="mt-4 whitespace-pre-line">
          {resume?.education}
        </p>
      </div>
    </div>
  );
}