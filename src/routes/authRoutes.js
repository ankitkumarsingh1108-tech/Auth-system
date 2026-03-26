const express = require("express");
const router = express.Router();

// IMPORT BOTH IN ONE LINE ONLY
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
