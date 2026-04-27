import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseDataFatLoss } from "../../ExerciseDataFatLoss";

const push = () => {
  return (
    <ExerciseDetail
      {...ExerciseDataFatLoss.push}
    />
  )
}

export default push
