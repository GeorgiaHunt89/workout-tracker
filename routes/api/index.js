const router = require("express").Router();
const workoutRoutes = require("./workouts");
const exerciseRoutes = require("./exercise");

router.use("/workouts", workoutRoutes);
router.use("/exercise", exerciseRoutes);

module.exports = router;
