import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";

const inclineDB = () => {
  return(
    <ExerciseDetail 
      {...ExerciseData.inclineBench}
    />
  )
}

export default inclineDB
