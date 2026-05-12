const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  createResume,
  getResumes,
  updateResume,
  deleteResume,
  getPublicResume,
} = require(
  "../controllers/resumeController"
);

router.get(
  "/public/:id",
  getPublicResume
);

router.post(
  "/",
  authMiddleware,
  createResume
);

router.get(
  "/",
  authMiddleware,
  getResumes
);

router.put(
  "/:id",
  authMiddleware,
  updateResume
);

router.delete(
  "/:id",
  authMiddleware,
  deleteResume
);

module.exports = router;