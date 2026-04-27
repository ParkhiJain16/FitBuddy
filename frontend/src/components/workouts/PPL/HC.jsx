import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";

const HC = () => {
  return (
    <ExerciseDetail
      {...ExerciseData.hammercurl}
    />
  )
}

export default HC
