import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";

const tricepPushDown = () => {
  return(
    <ExerciseDetail 
      {...ExerciseData.tricepPushDown}
    />
  )
}

export default tricepPushDown