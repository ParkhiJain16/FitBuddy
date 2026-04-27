const mongoose = require("mongoose");

const workoutLogSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    date:{
        type: Date,
        default: Date.now
    },
    exercises:[
        {
            name: String,
            sets: Number,
            reps: Number,
            weight: Number,
            isPR: {type: Boolean, default: false}
        }
    ]
});
module.exports = mongoose.model("Workout Log", workoutLogSchema);