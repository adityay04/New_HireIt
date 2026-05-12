const bioPrompt = (
  name,
  role,
  skills,
  experience,
  projects
) => `
Generate a professional developer portfolio bio.

Name:
${name}

Role:
${role}

Skills:
${skills}

Experience:
${experience}

Projects:
${projects}

Return:
1. Short professional bio
2. About section
3. Portfolio intro tagline
4. Project summary paragraph

Keep it modern, concise, and professional.
`;

module.exports = bioPrompt;