import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";

const lateralRaises = () => {
  return(
    <ExerciseDetail 
      {...ExerciseData.lateralRaises}
    />
  )
}

export default lateralRaises
