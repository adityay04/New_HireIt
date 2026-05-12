const matchPrompt = (
  resumeText,
  jobDescription
) => `
Compare the following resume with the job description.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return:
1. Match percentage
2. Missing skills
3. Matching strengths
4. Suggested improvements
5. ATS keyword gaps

Keep response structured and concise.
`;

module.exports = matchPrompt;