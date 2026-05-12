const Resume = require(
  "../models/Resume"
);

exports.createResume = async (
  req,
  res
) => {
  try {
    const resume =
      await Resume.create({
        ...req.body,
        user: req.user.id,
      });

    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getResumes = async (
  req,
  res
) => {
  try {
    const resumes =
      await Resume.find({
        user: req.user.id,
      }).sort({
        createdAt: -1,
      });

    res.json(resumes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateResume = async (
  req,
  res
) => {
  try {
    const resume =
      await Resume.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user.id,
        },
        req.body,
        {
          new: true,
        }
      );

    if (!resume) {
      return res
        .status(404)
        .json({
          message:
            "Resume not found",
        });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteResume = async (
  req,
  res
) => {
  try {
    const resume =
      await Resume.findOneAndDelete(
        {
          _id: req.params.id,
          user: req.user.id,
        }
      );

    if (!resume) {
      return res
        .status(404)
        .json({
          message:
            "Resume not found",
        });
    }

    res.json({
      message:
        "Resume deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getPublicResume = async (
  req,
  res
) => {
  try {
    const resume =
      await Resume.findById(
        req.params.id
      );

    if (!resume) {
      return res
        .status(404)
        .json({
          message:
            "Resume not found",
        });
    }

    if (!resume.isPublic) {
      return res
        .status(403)
        .json({
          message:
            "Resume is private",
        });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};