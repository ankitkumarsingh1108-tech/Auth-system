const express = require("express");
const router = express.Router();

// IMPORT CONTROLLERS
const { register, login } = require("../controllers/authController");

// IMPORT MIDDLEWARE
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);


router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to protected route ",
    user: req.user,
  });
});

module.exports = router;