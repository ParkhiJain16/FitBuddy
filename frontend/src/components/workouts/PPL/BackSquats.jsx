import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";

const BackSquats = () => {
  return (
    <ExerciseDetail
      {...ExerciseData.backSquats}
    />
  )
}

export default BackSquats
