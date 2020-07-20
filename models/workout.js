const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        distance: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
    day: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Creating workout using model for export
const Workout = mongoose.model("workout", workoutSchema);
// Exporting for use in other files
module.exports = Workout;