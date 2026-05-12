const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

exports.generateSkills = async (req, res) => {
  try {
    const { role } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
Generate ONLY a clean comma-separated list of professional resume skills.

NO explanations.
NO numbering.
NO headings.
NO markdown.

Example:
React, Next.js, Tailwind CSS, MongoDB, Node.js

Role:
${role}
`,
        },
      ],

      model: "llama-3.3-70b-versatile",
    });

    res.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "AI generation failed",
    });
  }
};

exports.generateBio = async (req, res) => {
  try {
    const { name, role, skills } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
Write a professional portfolio bio.

Name: ${name}
Role: ${role}
Skills: ${skills}

Keep it modern and concise.
`,
        },
      ],

      model: "llama-3.3-70b-versatile",
    });

    res.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Bio generation failed",
    });
  }
};

exports.matchJob = async (req, res) => {
  try {
    const { resumeSkills, jobDescription } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
Compare these resume skills:

${resumeSkills}

with this job description:

${jobDescription}

Give:
1. Match percentage
2. Missing skills
3. Improvement suggestions
`,
        },
      ],

      model: "llama-3.3-70b-versatile",
    });

    res.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Job matching failed",
    });
  }
};

exports.improveExperience = async (req, res) => {
  try {
    const { experience } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
Improve this resume experience professionally.

Experience:
${experience}

Make it ATS friendly and impactful.
`,
        },
      ],

      model: "llama-3.3-70b-versatile",
    });

    res.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Experience improvement failed",
    });
  }
};

exports.improveEducation = async (req, res) => {
  try {
    const { education } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
Improve this education section professionally for a resume.

Education:
${education}
`,
        },
      ],

      model: "llama-3.3-70b-versatile",
    });

    res.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Education improvement failed",
    });
  }
};
