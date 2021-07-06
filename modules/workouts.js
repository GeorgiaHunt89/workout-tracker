const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },

    exercise: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter the type of the exercise",
        },

        name: {
          type: String,
          trim: true,
          required: "Please enter the name of the exercise",
        },

        duration: {
          type: Number,
          required: "Please enter the duration of the exercise",
        },

        weight: {
          type: Number,
          required: "Please enter the weight used",
          default: 0,
        },

        reps: {
          type: Number,
          required: "Please enter the number of reps completed,",
          default: 0,
        },

        sets: {
          type: Number,
          required: "Please enter the number of sets completed",
          default: 0,
        },

        distance: {
          type: Number,
          required: "Please enter the distance completed",
          default: 0,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutsSchema.virtual("totalDuration").get(function () {
  return this.exercise.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const workouts = mongoose.model("workouts", workoutsSchema);

module.exports = workouts;
