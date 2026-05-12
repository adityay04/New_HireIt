const bulletsPrompt = (
  role,
  skills,
  experience
) => `
Generate 3 ATS-friendly resume bullet points.

Role:
${role}

Skills:
${skills}

Experience:
${experience}

Rules:
- Use strong action verbs
- Keep each point under 25 words
- Make them professional
- Focus on measurable impact
`;

module.exports = bulletsPrompt;