const mongoose = require("mongoose");
const workoutPlanSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title: String,
    days:[
        {
            day: String,
            exercises:[
                {
                    name: String,
                    sets: Number,
                    reps: Number
                }
            ]
        }
    ]
},{timestamps:true});

module.exports = mongoose.model("Workout Plan", workoutPlanSchema);