import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseDataFatLoss } from "../../ExerciseDataFatLoss";

const planks = () => {
  return (
    <ExerciseDetail
      {...ExerciseDataFatLoss.planks}
    />
  )
}

export default planks
