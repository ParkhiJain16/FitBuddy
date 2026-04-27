import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseDataFatLoss } from "../../ExerciseDataFatLoss";

const high = () => {
  return (
    <ExerciseDetail
      {...ExerciseDataFatLoss.highknees}
    />
  )
}

export default high
