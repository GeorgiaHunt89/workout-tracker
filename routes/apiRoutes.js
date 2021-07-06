const router = require("express").Router();
const workouts = require("../modules/workouts");

// The `/api/workouts` endpoint

router.get("/", (req, res) => {
  // find all workouts
  workouts
    .find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  // find one workout by its `id` value
  console.log(body);
  workouts
    .findByIdAndUpdate(
      params.id,
      { $push: { exercise: body } },
      { new: true, runValidators: true }
    )
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  // create a new workout
  workouts
    .create({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  // find a workout by its range
  workouts
    .find({})
    .limit(10)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
  // delete a workout
  workouts
    .findByIdAndRemove(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
