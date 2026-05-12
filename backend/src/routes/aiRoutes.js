const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  generateSkills,
  generateBio,
  matchJob,
  improveExperience,
  improveEducation,
} = require("../controllers/aiController");

router.post("/skills", authMiddleware, generateSkills);

router.post("/bio", authMiddleware, generateBio);

router.post("/match", authMiddleware, matchJob);

router.post("/experience", authMiddleware, improveExperience);

router.post("/education", authMiddleware, improveEducation);

module.exports = router;
