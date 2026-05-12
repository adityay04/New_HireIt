const express = require("express");
//the only error i encountered was Routes folder was case sensitive and i had to name it routes
const {
  register,
  login,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

module.exports = router;