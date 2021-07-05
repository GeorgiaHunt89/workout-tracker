const router = require("express").Router();
const { workouts, exercise } = require("../../models");

// The `/api/workouts` endpoint

router.get("/", (req, res) => {
  // find all workouts
  // be sure to include its associated exercises
});

router.get("/:id", (req, res) => {
  // find one workout by its `id` value
  // be sure to include its associated exercise
});

router.post("/", (req, res) => {
  // create a new workout
});

router.put("/:id", (req, res) => {
  // update a workout by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a workout by its `id` value
});

module.exports = router;
