import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseDataFatLoss } from "../../ExerciseDataFatLoss";

const burpee = () => {
  return (
    <ExerciseDetail
      {...ExerciseDataFatLoss.burpee}
    />
  )
}

export default burpee
