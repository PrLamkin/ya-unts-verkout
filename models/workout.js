const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
}, {
    toJSON: {
        virtuals: true
    }
})

workoutSchema.virtual("totalDuration").get(function() {})

const WorkOut = mongoose.model("Workout", workoutSchema);

module.exports = WorkOut;