const atsPrompt = (resumeText) => `
Analyze this resume for ATS optimization.

Resume:
${resumeText}

Return:
1. ATS Score out of 100
2. Missing keywords
3. Weak bullet points
4. Suggested improvements
5. Overall feedback

Keep response structured.
`;

module.exports = atsPrompt;