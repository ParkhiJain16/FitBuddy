const workoutPlan = require("../models/WorkoutPlan");

exports.createPlan = async(req,res)=>{
    const plan = new workoutPlan({
        ...req.body,
        userId: req.user.id
    });
    await plan.save();
    res.json(plan);
};

exports.getPlan = async(req,res)=>{
    const plans = await workoutPlan.find({userId: req.user.id});
    res.json(plans);
};

exports.updatePlan = async(req,res)=>{
    const updated = await workoutPlan.findByIdAndUpdate(
        {

            _id: req.params.id,
            userId: req.user.id
        },
        req.body,
        {new:true}
    );
    if (!updated) {
        return res.status(404).json({ msg: "Plan not found or not authorized" });
    }
    res.json(updated);
};

exports.deletePlan = async(req,res)=>{
    const deleted = await workoutPlan.findByIdAndDelete({
        _id: req.params.id,
        userId: req.user.id
    });
    if (!deleted) {
        return res.status(404).json({ msg: "Plan not found or not authorized" });
    }
    res.json({msg:"Deleted"});
};