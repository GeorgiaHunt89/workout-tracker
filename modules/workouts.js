const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
  },

  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please enter the name of the exercise",
      },

      type: {
        type: String,
        trim: true,
        required: "Please enter the type of the exercise",
      },

      duration: {
        type: Number,
        required: "Please enter the duration of the exercise",
      },

      weight: {
        type: Number,
        required: "Please enter the weight used",
      },

      reps: {
        type: Number,
        required: "Please enter the number of reps completed,",
      },

      sets: {
        type: Number,
        required: "Please enter the number of sets completed",
      },

      distance: {
        type: Number,
        required: "Please enter the distance completed",
      },
    },
  ],
});

const workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = workouts;
