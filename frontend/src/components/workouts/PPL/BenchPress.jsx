import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";

const BenchPress = () => {
  return (
    <ExerciseDetail
      {...ExerciseData.benchPress}
    />
  )
}

export default BenchPress
