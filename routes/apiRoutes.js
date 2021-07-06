const router = require("express").Router();
const workout = require("../modules");

// The `/api/workouts` endpoint

router.get("/", (req, res) => {
  // find all workouts
  workout
    .find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  // find one workout by its `id` value
  console.log(body);
  workout
    .findByIdAndUpdate(
      params.id,
      { $push: { exercise: body } },
      { new: true, runValidators: true }
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new workout
  workout
    .create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  // find a workout by its range
  workout
    .find({})
    .limit(10)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
  // delete a workout
  workout
    .findByIdAndRemove(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
