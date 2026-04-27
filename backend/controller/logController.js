const workoutLog = require("../models/WorkoutLog");
exports.addLog = async(req,res)=>{
    try{
        const userId = req.user.id;
        const exercises = req.body.exercises;
        const updatedExercise=[];
        for (let exercise of exercises){
            const prevLogs = await workoutLog.find({
                userId,
                "exercises.name":exercise.name
            });
            let maxWeight = 0;
            prevLogs.forEach(log => {
                log.exercises.forEach(ex => {
                  if (ex.name === exercise.name) {
                    maxWeight = Math.max(maxWeight, ex.weight || 0);
                  }
                });
            });
            if (prevLogs.length === 0 || exercise.weight > maxWeight) {
                exercise.isPR = true;
            } else {
                exercise.isPR = false;
            }
        
            updatedExercise.push(exercise);
        }
        const log = new workoutLog({
        userId,
        exercises: updatedExercise
        });
      
        await log.save();
      
        res.json(log);
    }catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
}
    
exports.getLogs = async(req,res)=>{
    const logs=  await workoutLog.find({userId: req.user.id});
    res.json(logs);
};
exports.updateLogs = async(req,res)=>{
    const updated = await workoutLog.findOneAndUpdate(
        {
            _id: req.params.id,
            userId: req.user.id
        },
        req.body,
        {new:true}
    );
    if (!updated) {
        return res.status(404).json({ msg: "Log not found or not authorized" });
      }
  
    res.json(updated);
};
exports.deleteLogs = async(req,res)=>{
    const deleted = await workoutLog.findOneAndDelete({
        _id: req.params.id,
        userId: req.user.id
    },
    req.body,
    {new:true}   
    );
    if (!deleted) {
        return res.status(404).json({ msg: "Log not found or not authorized" });
    }
  
    res.json({ msg: "Log deleted" });
}