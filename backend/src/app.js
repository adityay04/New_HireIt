const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const resumeRoutes = require("./routes/resumeRoutes");

const aiRoutes = require("./routes/aiRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HireIt API Running");
});

app.use("/api/auth", authRoutes);

app.use("/api/resume", resumeRoutes);

app.use("/api/ai", aiRoutes);

module.exports = app;