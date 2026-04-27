import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseDataFatLoss } from "../../ExerciseDataFatLoss";

const mountain = () => {
  return (
    <ExerciseDetail
      {...ExerciseDataFatLoss.climbers}
    />
  )
}

export default mountain
