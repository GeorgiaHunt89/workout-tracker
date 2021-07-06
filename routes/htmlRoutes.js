// Dependencies
const path = require("path");
const router = require("express").Router();

// Get route index.html
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Get route for exercise
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Get route for stats
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
